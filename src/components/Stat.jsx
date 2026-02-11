export default function Stat({ icon, title, value }) {
    return (
        <div className={`stat flex items-center gap-4 bg-card border-border border-2 border-dashed hover:border-accent p-3 transition-all`}>
            <img alt={title} src={icon} width={32} height={32} draggable={false} />
            <div>
                <span className={"block font-bold text-xl"}>{value}</span>
                <span className={"text-muted-foreground font-bold text-xs md:text-sm text-nowrap"}>{title}</span>
            </div>
        </div>
    )
}