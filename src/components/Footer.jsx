import Tippy from "@tippyjs/react"
import Logo from "./Logo.jsx"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import x from "../assets/twitter.svg"
import me from "../assets/ayman.svg"

const socialLinks = [
    { name: "GitHub", url: "https://github.com/aymansoliman-dev", icon: github },
    { name: "Linkedin", url: "https://www.linkedin.com/in/aymansoliman-dev/en/", icon: linkedin },
    { name: "X", url: "https://x.com/a_soliman1783", icon: x },
    { name: "Ayman", url: "https://drive.google.com/file/d/1aFNy-k7gMEHSt-UmVW75aXk5Y4x-wEpm/view?usp=sharing", icon: me }
]

export default function Footer() {
    return (
        <footer className={"p-6 pb-0 select-none"}>
            <div className={"container border-t-2 border-border border-dashed p-6 select-none flex flex-col items-center gap-4 lg:flex-row lg:justify-between"}>
                <Logo />
                <p className={"text-sm text-nowrap"}>Powered by <span className={"decoration-wavy underline underline-offset-4 text-accent font-semibold hover:no-underline"}><a href="https://chefgroq.vercel.app/" target="_blank" rel="noopener noreferrer">Chef Groq</a></span> AI Recipe Generator</p>
                <div id="social-links" className="flex items-center ">
                    <ul className="flex items-center gap-8 sm:gap-5">
                        { socialLinks.map(({ name, url, icon }) =>
                            <li key={name} id={name}>
                                <Tippy content={name} arrow={true} animation="shift-away-subtle" duration={[300, 200]} trigger="mouseenter">
                                    <span>
                                        <a href={url} target="_blank" rel="noreferrer">
                                            <img src={icon} alt={name} className="w-5 sm:w-7 aspect-square" />
                                        </a>
                                    </span>
                                </Tippy>
                            </li>)
                        }
                    </ul>
                </div>
                <span id={"copyright"} className={"text-sm"}>@ {new Date().getFullYear()} Recipe Book</span>
            </div>
        </footer>
    )
}