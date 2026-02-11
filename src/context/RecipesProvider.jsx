import state from "../data/state.js"
import { createContext, useContext, useEffect } from 'react'
import { useImmerReducer } from 'use-immer'

const RecipesContext = createContext(null)
const DispatchContext = createContext(null)

const loadInitialState = () => {
    try {
        const saved = localStorage.getItem('state')
        if (saved) {
            let data = JSON.parse(saved)
            data.category = "all"
            return data
        }
    } catch (error) {
        console.error('Failed to load state:', error)
    }
    return state
}

const initialState = loadInitialState()

function recipeReducer(draft, action) {
    switch (action.type) {
        case 'toggled_favorite': {
            const recipe = draft.recipes.find(r => r.id === action.recipeId)
            recipe.isFavorite = !recipe.isFavorite
            break
        }
        case 'toggled_saved': {
            const recipe = draft.recipes.find(r => r.id === action.recipeId)
            recipe.isSaved = !recipe.isSaved
            break
        }
        case 'selected_category': {
            draft.searchQuery = ""
            draft.category = action.category
            break
        }
        case 'searched': {
            draft.category = "all"
            draft.searchQuery = action.query
            break
        }
        case 'viewed_recipe': {
            draft.viewingRecipeId = action.recipeId
            break
        }
        case 'hide_recipe_page': {
            draft.viewingRecipeId = null
            break
        }
        case 'increased_no_servings': {
            draft.recipes.find(recipe => recipe.id === draft.viewingRecipeId).servings++
            break
        }
        case 'decreased_no_servings': {
            draft.recipes.find(recipe => recipe.id === draft.viewingRecipeId).servings--
            break
        }
        case 'recipe_added': {
            draft.recipes.push(action.recipe)
            break
        }
        case 'recipe_deleted': {
            draft.recipes = draft.recipes.filter(recipe => recipe.id !== action.id)
            break
        }
        default:
            throw Error('Unknown action: ' + action.type)
    }
}

export default function RecipesProvider({ children }) {
    const [state, dispatch] = useImmerReducer(recipeReducer, initialState)

    useEffect(() => {
        try {
            localStorage.setItem('state', JSON.stringify(state))
        } catch (error) {
            console.error('Failed to save state:', error)
        }
    }, [state])

    return (
        <RecipesContext value={state}>
            <DispatchContext value={dispatch}>
                {children}
            </DispatchContext>
        </RecipesContext>
    )
}

function useRecipes() {
    const context = useContext(RecipesContext)
    if (!context) {
        throw new Error("useRecipes must be used within RecipesProvider")
    }
    return context
}

function useDispatch() {
    const context = useContext(DispatchContext)
    if (!context) {
        throw new Error("useDispatch must be used within DispatchProvider")
    }
    return context
}

export { useRecipes, useDispatch }