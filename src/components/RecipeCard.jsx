import preparationTime from "../assets/preparation-time.svg"
import star from "../assets/star.svg"
import emptyStar from "../assets/empty-star.svg"
import save from "../assets/save.svg"
import saved from "../assets/saved.svg"
import like from "../assets/like.svg"
import liked from "../assets/liked.svg"
import { useDispatch } from "../context/RecipesProvider.jsx"
import Tippy from "@tippyjs/react"

export default function RecipeCard({ recipe }) {

    const dispatch = useDispatch()

    function handleToggleFavorite(id) {
        dispatch({type: "toggled_favorite", recipeId: id})
    }

    function handleToggleSaved(id) {
        dispatch({type: "toggled_saved", recipeId: id})
    }

    function viewRecipe(id) {
        dispatch({type: "viewed_recipe", recipeId: id})
    }

    return (
        <article className={"recipe relative border-border sketchy-shadow border bg-card overflow-hidden group pt-64 transition-all"} >
            <div className={"absolute inset-0 bg-cover bg-center group-hover:scale-[103%] transition-all -translate-y-1/4"} style={{
                    backgroundImage: `url(${recipe.image})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                }}
            >
            </div>

            <div className={"absolute top-0 w-full flex justify-between items-center p-4 select-none z-20"}>
                <span className={`recipe-category sketchy bg-foreground text-accent-foreground text-xs px-4 py-2 uppercase border border-border`} >{recipe.category}</span>
                <Tippy className={"tippy"} content={recipe.isFavorite? "liked" : "like"} placement={"bottom-end"} theme={"light-border"} >
                    <label className={`sketchy-sm border border-border p-2 bg-gray-200 has-[:checked]:bg-accent cursor-pointer`} >
                        <img src={recipe.isFavorite? liked : like} alt={"love"} width={20} draggable={false} />
                        <input onChange={() => handleToggleFavorite(recipe.id)} name={"favorite?"} type={"checkbox"} aria-label={recipe.isFavorite? `remove ${recipe.name} from your favorite recipes`: `add ${recipe.name} to your favorite recipes`} className={"hidden"} checked={recipe.isFavorite} />
                    </label>
                </Tippy>
            </div>

            <div className={"bg-card relative z-20"}>
                <div className={"recipe-info flex flex-col gap-4 p-4 pb-0 relative"}>
                    <div className={"title flex flex-col gap-2"}>
                        <h4 className={"text-2xl capitalize"}>{recipe.name}</h4>
                        <p className={"text-muted-foreground text-sm lg:h-[2ch] lg:mb-5"}>{recipe.description}</p>
                    </div>
                    <div className={"meta-data flex items-center justify-between gap-4"}>
                        <div className={"flex gap-2 select-none"}>
                            <img src={preparationTime} alt={"Preparation Time"} width={20} draggable={false} />
                            <span className={"text-sm text-muted-foreground"}>{recipe.prepTime} min</span>
                        </div>
                        <span className={"flex gap-0.25 select-none"}>
                        {Array(recipe.rating).fill(0).map((_, i) => <img key={i} src={star} alt={"star"} width={16} draggable={false} />)}
                            {Array(5 - recipe.rating).fill(0).map((_, i) => <img key={i} src={emptyStar} alt={"empty star"} width={16} draggable={false} />)}
                    </span>
                    </div>
                </div>
                <div className={"buttons border-t-2 border-border border-dashed m-4 mb-0 flex gap-4 py-4 select-none relative z-10"}>
                    <button onClick={() => viewRecipe(recipe.id)} aria-label={"cook now"} className={"sketchy-pill border-2 border-border py-1 grow hover:bg-foreground hover:text-accent-foreground transition-all"}>Cook Now</button>
                    <Tippy className={"tippy"} content={recipe.isSaved? "saved" : "save"} placement={"top-end"} >
                        <label className={"save border-2 border-accent border-dashed sketchy-sm p-2 has-[:checked]:border-solid has-[:checked]:bg-accent cursor-pointer"}>
                            <img src={recipe.isSaved? saved : save} alt={"save"} width={24} draggable={false} />
                            <input onChange={() => handleToggleSaved(recipe.id)} name={"saved?"} type={"checkbox"} aria-label={recipe.isSaved? `remove ${recipe.name} from your saved recipes` : `add ${recipe.name} to your saved recipes`} className={"hidden"} checked={recipe.isSaved} />
                        </label>
                    </Tippy>
                </div>
            </div>
        </article>
    )
}