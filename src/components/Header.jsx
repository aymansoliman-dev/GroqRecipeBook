import Logo from "./Logo.jsx"
import SearchBar from "./SearchBar.jsx"
import NavigationBar from "./NavigationBar.jsx"
import burger from "../assets/burger.svg"
import close from "../assets/close.svg"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={"p-4 lg:p-6 bg-card border-border border-b-2 sticky top-0 z-30 left-0 right-0"}>
            <div className={"container flex items-center justify-between gap-16"}>
                <Logo />
                <div className={"flex-1 hidden lg:flex justify-between items-center gap-6 grow shrink text-lg"}>
                    <SearchBar inputId={"large-screens-search"} />
                    <NavigationBar />
                </div>
                <button onClick={() => setIsOpen(!isOpen)} id={"burger-menu"} className={"lg:hidden"}>
                    <img src={isOpen? close : burger} alt={"Menu"} width={32} height={32} draggable={false} />
                </button>
                { isOpen &&
                    <div className={"lg:hidden absolute top-full right-0 left-0 z-50 bg-card p-6 border-y-2 border-border"}>
                        <div className={"container flex flex-col items-start gap-6"}>
                            <SearchBar inputId={"small-screens-search"} />
                            <NavigationBar />
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}