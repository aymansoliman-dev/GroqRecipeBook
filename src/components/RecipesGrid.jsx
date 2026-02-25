import RecipeCard from "./RecipeCard.jsx"
import { useRecipes } from "../context/RecipesProvider.jsx"
import { useMemo} from "react";

export default function RecipesGrid() {
    const { recipes, category, searchQuery } = useRecipes()

    const recipesList = useMemo(() => {
        if (searchQuery !== "") {
            return recipes.filter((recipe) => recipe.category.includes(searchQuery) || recipe.name.includes(searchQuery) || recipe.ingredients.some(ingredient => ingredient.name.includes(searchQuery)) || recipe.cuisine.includes(searchQuery))
        }
        else if (category !== "all") {
            return recipes.filter((recipe) => recipe.category === category)
        }
        else {
            return recipes
        }
    }, [category, searchQuery, recipes])

    return (
        <div id={"recipes-list"} className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}>
            { recipesList.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>) }
        </div>
    )
}