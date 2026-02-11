import adIcon from "../assets/ad-icon.svg"
import chefGroq from "../assets/chef.svg"
import link from "../assets/link.svg"
import arrow from "../assets/arrow.svg"
import chefGroqApp from "../assets/chef-groq-app.png"

export default function Advertisement() {
    return (
        <section id={"advertisement"}>
            <div className={"container flex flex-col lg:flex-row justify-between gap-8 border-border border-2 bg-card sketchy sketchy-shadow wiggle-2 p-8"}>
                <div className={"ad-content flex flex-col items-center text-center lg:text-start lg:items-start gap-8 lg:gap-12 xl:gap-14 2xl:gap-16 lg:max-w-1/2"}>
                    <div id={"ad-title"} className={"flex items-center gap-2 select-none"}>
                        <img src={adIcon} alt={"Advertisement Icon"} width={24} />
                        <span className={"text-accent"}>AI-POWERED FEATURE</span>
                    </div>
                    <div id={"ad-description"} className={"flex flex-col gap-4"}>
                        <h2 className={"text-2xl sm:text-3xl"}>Make a recipe from your own Ingredients with Chef Groq!</h2>
                        <p className={"text-sm text-muted-foreground"}>Chef Groq is an AI-powered recipe generator using Groq API. It helps you decide what to cook using the ingredients you already have. Simply add your ingredients and get personalized recipe suggestions instantly.</p>
                    </div>
                    <div className={"buttons flex flex-col sm:flex-row items-center gap-4 select-none"}>
                        <a href={"https://chefgroq.vercel.app"} target={"_blank"} className={"flex items-center gap-2 bg-foreground hover:bg-accent transition-all w-fit px-6 py-2 sketchy-pill"}>
                            <img src={chefGroq} alt={"Chef Groq App"} width={24} height={24} draggable={false} className={"invert"} />
                            <span className={"text-accent-foreground"}>Try Chef Groq</span>
                            <img src={link} alt={"Link Icon"} width={16} draggable={false} />
                        </a>
                        <a href={"https://chefgroq.vercel.app"} target={"_blank"} className={"flex items-center gap-2 border-2 border-dashed border-accent text-accent hover:border-solid hover:text-accent-foreground bg-card hover:bg-accent w-fit px-6 py-2 sketchy-sm"}>Learn More</a>
                    </div>
                </div>
                <a href={"https://chefgroq.vercel.app"} target={"_blank"} >
                    <figure className={"ad-image shrink-0 text-center text-muted-foreground text-sm self-center select-none"}>
                        <div className={"sketchy-shadow sketchy p-2 bg-secondary border-border border-2 w-full lg:w-[440px]"}>
                            <img src={chefGroqApp} alt={"Chef Groq App"} className={"w-full h-auto"} width={440} height={650} draggable={false} />
                        </div>
                        <figcaption className={"mt-2"}>chefgroq.vercel.app</figcaption>
                    </figure>
                </a>
            </div>
        </section>
    )
}