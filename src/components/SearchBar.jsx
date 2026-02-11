import search from '../assets/search.svg'
import {useDispatch} from "../context/RecipesProvider.jsx"

export default function SearchBar({ inputId }) {

    function handleFocus() {
        document.getElementById("explore").scrollIntoView()
    }

    const dispatch = useDispatch()
    function handleChange(e) {
        dispatch({type: "searched", query: e.target.value.toLowerCase()})
    }

    return (
        <div className={"basis-1/2 shrink border-2 border-border sketchy-sm px-2 py-1 bg-card flex gap-2"} >
            <img src={search} alt={"Search Icon"} width={32} height={32} draggable={false} className={"scale-80"} />
            <input onChange={handleChange} id={inputId} aria-label={"search for a recipe, an ingredient, or a category"} type={"search"} placeholder={"Search recipes..."} className={"grow shrink outline-none text-lg w-full"} onDragOver={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()} onFocus={handleFocus} />
        </div>
    )
}