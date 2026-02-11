import chef from "../assets/chef.svg"

export default function NavigationBar() {
    return (
        <nav className={"shrink-0 select-none"}>
            <ul className={"flex flex-col lg:flex-row gap-6 items-start lg:items-center whitespace-nowrap text-lg lg:text-sm font-semibold"}>
                <li><a>All Recipes</a></li>
                <li><a>Favorites</a></li>
                <li className={"cursor-pointer"}><a href={"#explore"}>Categories</a></li>
                <li>
                    <a className={"flex gap-2 items-center text-foreground border-2 border-foreground border-dashed hover:border-solid hover:bg-foreground hover:text-accent-foreground hover:[&>img]:invert p-2 sketchy-pill"} href={"https://chefgroq.vercel.app"} target={"_blank"} >
                        <img src={chef} alt={"Chef Groq App"} width={24} height={24} draggable={false} />
                        <span>Chef Groq</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}