import {useDispatch, useRecipes} from "../context/RecipesProvider.jsx"

export default function CategoryBrowser() {
    const { recipes, category, searchQuery } = useRecipes()

    let categories = recipes.map(recipe => recipe.category)
    categories = [...new Set(categories)]
    categories = ["all", ...categories]

    let numberOfRecipes = recipes.length
    if (searchQuery !== "") numberOfRecipes = recipes.filter((recipe) => recipe.category.includes(searchQuery) || recipe.name.includes(searchQuery) || recipe.ingredients.some(ingredient => ingredient.name.includes(searchQuery))).length
    else if (category !== "all") numberOfRecipes = recipes.filter((recipe) => recipe.category === category).length

    const dispatch = useDispatch()
    function handleClick(e) {
        dispatch({type: "selected_category", category: e.target.value})
    }

    const categoriesButtons = categories.map(categoryName =>
                <button
                    key={categoryName}
                    value={categoryName}
                    onClick={handleClick}
                    aria-label={`${categoryName} category`}
                    className={`${category === categoryName ? 'active bg-foreground text-accent-foreground border-solid border-foreground' : 'hover:text-accent hover:border-accent'} category capitalize text-muted-foreground font-semibold py-1 px-5 border-border border-dashed border-2 transition-all`}
                >
                    {categoryName}
                </button>
            )

    return (
        <div id={"category-browser"}>
            <div className={"flex items-center justify-between gap-4 select-none"}>
                <h3 className={"text-xl"}>Browse by Category</h3>
                <span className={"inline-block border-dashed sketchy-sm text-muted-foreground font-medium px-3 py-1 border-border border-2"}>{numberOfRecipes} recipes</span>
            </div>
            <div id={"categories"} className={"flex flex-wrap gap-3 mt-4 text-sm md:text-base select-none"}>
                {categoriesButtons}
            </div>
        </div>
    )
}