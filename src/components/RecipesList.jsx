import RecipeCard from "./RecipeCard.jsx"
import { useRecipes } from "../context/RecipesProvider.jsx"

export default function RecipesList() {
    const { recipes, category, searchQuery } = useRecipes()

    let recipesList = recipes
    if (searchQuery !== "") {
        recipesList = recipes.filter((recipe) => recipe.category.includes(searchQuery) || recipe.name.includes(searchQuery) || recipe.ingredients.some(ingredient => ingredient.name.includes(searchQuery)) || recipe.cuisine.includes(searchQuery))
    }
    else if (category !== "all") {
        recipesList = recipes.filter((recipe) => recipe.category === category)
    }

    return (
        <div id={"recipes-list"} className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}>
            { recipesList.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>) }
        </div>
    )
}