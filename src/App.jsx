import { useRecipes } from "./context/RecipesProvider.jsx"
import RecipePage from "./components/RecipePage.jsx"
import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light-border.css'

export default function App() {
    const state = useRecipes()
    const isViewingRecipe = state.viewingRecipeId !== null
    const recipeObject = state.recipes.find(recipe => recipe.id === state.viewingRecipeId)

    return (
        <>
            <Header />
            <MainContent />
            <Footer />
            { isViewingRecipe && recipeObject && <RecipePage recipe={recipeObject} /> }
        </>
    )
}