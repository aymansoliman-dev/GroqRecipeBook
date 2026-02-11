import chef from "../assets/chef.svg"

export default function AIChefAssistant() {
    return (
        <section id={"ai-chef-assistant"}>
            <div data-usal={"fade-u"} className={"container sketchy-shadow wiggle-1 sketchy p-6 lg:p-10 bg-card border-border border-2 flex flex-col gap-4 md:gap-8 md:flex-row md:items-center justify-between"}>
                <div className={"lg:max-w-1/2"}>
                    <h2 className={"text-2xl lg:text-3xl"}>Your Personal Recipe Collection</h2>
                    <p className={"text-muted-foreground mt-3 text-sm lg:text-lg"}>Browse, save, and discover delicious recipes. Powered by AI to help you cook with what you have.</p>
                </div>
                <a href={"https://chefgroq.vercel.app/"} target={"_blank"} className={"flex items-center gap-2 bg-accent hover:bg-foreground transition-all w-fit py-2 px-6 wiggle-1 sketchy-pill text-accent-foreground shrink-0 select-none"} >
                    <img src={chef} alt={"Chef Groq App"} width={32} height={32} draggable={false} className={"invert"} />
                    <span className={"text-lg"}>Generate with AI</span>
                </a>
            </div>
        </section>
    )
}