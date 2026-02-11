import Stat from "./Stat.jsx"
import recipe from "../assets/recipe.svg"
import favorite from "../assets/favorite.svg"
import time from "../assets/flame.svg"
import saved from "../assets/save.svg"
import { useRecipes } from "../context/RecipesProvider.jsx"

export default function Stats() {

    const recipes = useRecipes().recipes
    const numberOfRecipes = recipes.length
    const numberOfFavorites = recipes.filter(recipe => recipe.isFavorite).length
    const avgPrepTime = (recipes.reduce((acc, recipe) => acc + parseInt(recipe.prepTime), 0) / numberOfRecipes).toFixed(0)
    const numberOfSavedRecipes = recipes.filter(recipe => recipe.isSaved).length

    return (
        <div id={"stats"} data-usal={"fade-u"} className={"grid grid-cols-2 gap-4 md:grid-cols-4 select-none"}>
            <Stat icon={recipe}   title={"Total Recipes"} value={numberOfRecipes}      />
            <Stat icon={favorite} title={"Favorites"}     value={numberOfFavorites}    />
            <Stat icon={time}     title={"Avg Prep Time"} value={avgPrepTime + " min"} />
            <Stat icon={saved}    title={"Saved Recipes"} value={numberOfSavedRecipes} />
        </div>
    )
}