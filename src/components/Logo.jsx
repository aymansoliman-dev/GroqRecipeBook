import logo from "../assets/logo.svg"

export default function Logo() {
    return (
        <div id={"logo"} className={"flex items-center-safe gap-4 select-none"}>
            <img src={logo} alt="Groq Recipe Book Logo" width={40} height={40} draggable={false} />
            <span className={"text-xl/5 text-nowrap"}>Groq Recipe Book</span>
        </div>
    )
}