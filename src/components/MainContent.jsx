import AIChefAssistant from "./AIChefAssistant.jsx"
import Stats from "./Stats.jsx"
import CategoryBrowser from "./CategoryBrowser.jsx"
import RecipesGrid from "./RecipesGrid.jsx"
import Advertisement from "./Advertisement.jsx"

export default function MainContent() {
    return (
        <main className={"px-4 py-8 flex flex-col gap-8"}>
            <AIChefAssistant />
            <section id={"recipes"}>
                <div className={"container flex flex-col gap-8"}>
                    <Stats />
                    <div id={"explore"} className={"scroll-mt-26 flex flex-col gap-8"}>
                        <CategoryBrowser />
                        <RecipesGrid />
                    </div>
                </div>
            </section>
            <Advertisement />
        </main>
    )
}