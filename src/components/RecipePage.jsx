import { useEffect } from "react"
import close from "../assets/close.svg"
import star from "../assets/star.svg"
import emptyStar from "../assets/empty-star.svg"
import lamp from "../assets/lamp.svg"
import Tippy from "@tippyjs/react"
import saved from "../assets/save-fff.svg"
import save from "../assets/save-000.svg"
import liked from "../assets/liked-fff.svg"
import like from "../assets/like-accent.svg"
import cookTime from "../assets/cook-time.svg"
import calories from "../assets/flame.svg"
import serving from "../assets/servings.svg"
import { useDispatch } from "../context/RecipesProvider.jsx"

export default function RecipePage({ recipe }) {
    const dispatch = useDispatch()

    useEffect(() => {
        document.body.classList.add('recipe-open')

        return () => {
            document.body.classList.remove('recipe-open')
        }
    }, [])

    function handleToggleSaved(id) {
        dispatch({type: "toggled_saved", recipeId: id})
    }
    function handleToggleFavorite(id) {
        dispatch({type: "toggled_favorite", recipeId: id})
    }
    function hideViewingRecipe() {
        dispatch({type: "hide_recipe_page"})
    }

    return (
        <div id={"recipe-page__overlay"} className={"fixed inset-0 bg-body z-50 overflow-y-scroll flex flex-col items-center"}>
            <div className={"m-2 md:m-3 lg:m-4 sticky top-2 md:top-3 lg:top-4 z-50 select-none"}>
                <Tippy className={"tippy"} content={"close recipe page"} placement={"right"} >
                    <button onClick={hideViewingRecipe} className={"bg-foreground rounded-full p-2.5"}><img src={close} alt={"close"} aria-label={"close recipe page"} width={32} height={32} className={"invert w-6 lg:w-8 aspect-square"} /></button>
                </Tippy>
            </div>
            <article id={recipe.name} className={"flex flex-col gap-4 py-5"}>
                <div id={"recipe__figure"}>
                    <div className={"flex flex-col md:flex-row gap-4 p-4 bg-card border border-border sketchy-shadow sketchy"}>
                        <figure className={"w-full md:w-1/2 overflow-hidden p-[3px] bg-border sketchy-pill"}>
                            <img src={recipe.image} alt={recipe.name} draggable={false} onContextMenu={(e) => e.preventDefault()} className={"sketchy h-full w-full object-cover"} />
                        </figure>
                        <div className={"flex flex-col gap-4 justify-between"}>
                            <div id="recipe__metadata" className={"flex gap-3 select-none [&>span]:text-xs [&>span]:md:text-sm"}>
                                <span className={"sketchy-pill bg-foreground px-3 py-1 text-accent-foreground uppercase"} >{recipe.category}</span>
                                <span className={"sketchy-pill bg-secondary px-3 py-1 border-border border uppercase"} >{recipe.cuisine}</span>
                            </div>
                            <div id="recipe__name-and-description" className={"flex flex-col gap-2"}>
                                <h1 className={"capitalize text-xl sm:text-2xl md:3xl"}>{recipe.name}</h1>
                                <p className={"text-xs sm:text-sm text-muted-foreground"} >{recipe.description}</p>
                            </div>
                            <div id="recipe__rating">
                            <span className={"flex gap-0.25"}>
                                {Array(recipe.rating).fill(0).map((_, i) => <img key={i} src={star} alt={"star"} width={16} draggable={false} />)}
                                {Array(5 - recipe.rating).fill(0).map((_, i) => <img key={i} src={emptyStar} alt={"empty star"} width={16} draggable={false} />)}
                            </span>
                            </div>
                            <div id="recipe__stats" className={"flex justify-center gap-12 border-y-2 border-border py-4 border-dashed text-xs select-none"}>
                                <div className={"flex flex-col gap-0.5 items-center"}>
                                    <img src={cookTime} alt={"cook time"} width={24} height={24} draggable={false} />
                                    <span className={"capitalize"}>cook time</span>
                                    <span>{recipe.prepTime} min</span>
                                </div>
                                <div className={"flex flex-col gap-0.5 items-center"}>
                                    <img src={serving} alt={"servings"} width={24} height={24} draggable={false} />
                                    <span className={"capitalize"}>servings</span>
                                    <span>{ recipe.servings }</span>
                                </div>
                                <div className={"flex flex-col gap-0.5 items-center"}>
                                    <img src={calories} alt={"calories"} width={24} height={24} draggable={false} />
                                    <span className={"capitalize"}>calories</span>
                                    <span>{recipe.nutritionInfo.calories}</span>
                                </div>
                            </div>
                            <div id="recipe__buttons" className={"flex gap-4"}>
                                <button onClick={() => handleToggleFavorite(recipe.id)} className={`${recipe.isFavorite? 'bg-accent text-accent-foreground' : ''} group sketchy-pill border-2 border-border py-1 grow flex gap-2 justify-center items-center select-none`}><img src={recipe.isFavorite? liked : like} alt={"love"} width={24} height={24} draggable={false} />{`Add${recipe.isFavorite? 'ed': ''} to Favorites`}</button>
                                <Tippy className={"tippy"} content={recipe.isSaved? "saved" : "save"} placement={"top-end"} >
                                    <label htmlFor={"is-favorite"}>
                                        <div className={"save border-2 border-border sketchy-sm p-2 has-[:checked]:bg-foreground cursor-pointer"}>
                                            <img src={recipe.isSaved? saved : save} alt={"save"} width={24} height={20} draggable={false} />
                                            <input onChange={() => handleToggleSaved(recipe.id)} name={"saved?"} id={"is-favorite"} type={"checkbox"} aria-label={recipe.isSaved? `remove ${recipe.name} from your saved recipes` : `add ${recipe.name} to your saved recipes`} className={"hidden"} checked={recipe.isSaved} />
                                        </div>
                                    </label>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"recipe__info"}>
                    <div className={"flex gap-4 [&>div]:grow-1 [&>div]:shrink-0 [&>div]:p-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div>h2]:select-none"}>
                        <div id="recipe__difficulty-level" className={"bg-card border border-border sketchy-sm"}>
                            <h2 className={"text-xs text-gray-500"}>DIFFICULTY LEVEL</h2>
                            <span className={"text-xl capitalize"}>{recipe.difficultyLevel}</span>
                        </div>
                        <div id="recipe__cuisine" className={"bg-card border border-border sketchy-sm"}>
                            <h2 className={"text-xs text-gray-500"}>CUISINE</h2>
                            <span className={"text-xl capitalize"}>{recipe.cuisine}</span>
                        </div>
                    </div>
                </div>

                <div id={"recipe__servings"}>
                    <div className="bg-card border border-border sketchy-sm p-4 flex flex-col gap-2 select-none">
                        <h2 className={"text-lg"}>Adjust Servings</h2>
                        <div id="servings__counter" className={"flex gap-4 items-center text-2xl"}>
                            <button disabled={recipe.servings === 1} className={"border border-border sketchy-pill px-3 hover:bg-foreground hover:text-accent-foreground disabled:bg-gray-300 disabled:opacity-50 disabled:hover:text-foreground"} onClick={() => dispatch({ type: "decreased_no_servings" })} >-</button>
                            <span id={"servings__counter__value"}>{recipe.servings}</span>
                            <button className={"border border-border sketchy-pill px-3 hover:bg-foreground hover:text-accent-foreground"} onClick={() => dispatch({ type: "increased_no_servings" })} >+</button>
                            <span className={"ml-auto text-xs text-muted-foreground"}>{`(from ${recipe.servings} serving${recipe.servings > 1? 's' : ''})`}</span>
                        </div>
                    </div>
                </div>

                <div id={"recipe__ingredients"}>
                    <div className={"bg-card border border-border sketchy p-4 flex flex-col gap-3"}>
                        <h2 className={"text-xl select-none"}>Ingredients</h2>
                        <div id="recipe__ingredients__list" className={"grid grid-cols-1 sm:grid-cols-2 gap-2"}>
                            {
                                recipe.ingredients.map((ingredient, index) => (
                                    <div key={'ingredient'+index} className={"ingredient flex items-center gap-2"}>
                                        <input id={index} type={"checkbox"}></input>
                                        <label htmlFor={index} className="text-sm capitalize">
                                            {ingredient.amount !== null ? (
                                                <>
                                                    <strong>
                                                        {(ingredient.amount * recipe.servings).toFixed(1).replace(/\.0$/, '')}
                                                        {ingredient.unit === 'g' ? 'g' : ` ${ingredient.unit}`}
                                                    </strong>
                                                    {' '}{ingredient.name}
                                                </>
                                            ) : (
                                                <>
                                                    {ingredient.name} <strong className="text-gray-500">({ingredient.unit})</strong>
                                                </>
                                            )}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div id={"recipe__instructions"}>
                    <div className={"bg-card border border-border sketchy-sm p-4 pb-8 flex flex-col gap-4"}>
                        <h2 className={"text-xl select-none"}>Instructions</h2>
                        <ol className={"list-decimal list-inside flex flex-col gap-4"}>
                            {
                                recipe.instructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                <div id={"recipe__nutrition-info"}>
                    <div className={"bg-card border border-border sketchy p-4 flex flex-col gap-3"}>
                        <h2 className={"text-xl select-none"}>Nutrition Info</h2>
                        <div className={"grid grid-cols-2 grid-rows-2 gap-4 [&>div:first-child]:col-span-2"}>
                            {
                                Object.keys(recipe.nutritionInfo).map((nutrition) => (
                                    <div key={nutrition} className={"nutrition-info bg-secondary border border-border border-dashed flex flex-col items-center justify-center gap-1 p-2"}>
                                        <h3 className={"uppercase text-xs text-gray-500 select-none"}>{nutrition}</h3>
                                        <span className={"text-xl font-semibold"}>{recipe.nutritionInfo[nutrition]}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div id={"recipe__tips"}>
                    <div className={"bg-card border border-border sketchy-sm p-4 flex flex-col gap-3"}>
                        <div className={"flex items-center gap-2"}>
                            <img src={lamp} alt={"lamp"} draggable={false} width={24} height={24} />
                            <h2 className={"text-xl select-none"}>Chef's Tips</h2>
                        </div>
                        <ul id={"recipe__tips__list"} className={"list-disc list-inside text-sm pl-8 flex flex-col gap-2"}>
                            {
                                recipe.tips.map((tip, index) => (
                                    <li key={index} className={"text-xs sm:text-sm"}>{tip}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </article>
            <div id={"gentle-message"}>
                <div className="text-muted-foreground border-t-2 border-border border-dashed py-6 text-center select-none text-sm md:text-base lg:text-lg">
                    <p>Happy cooking! Share your creation with <span className={"decoration-wavy underline underline-offset-4 text-accent font-semibold hover:no-underline"}><a href="https://chefgroq.vercel.app/" target="_blank" rel="noopener noreferrer">Chef Groq</a></span></p>
                </div>
            </div>
        </div>
    )
}