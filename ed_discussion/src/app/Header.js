export default function Header({children}) {
    return (
        <div className={"flex flex-col flex-wrap w-full bg-cyan-200"}>
            <ul className={"flex flex-grow justify-between"}>
                {children}
            </ul>
        </div>
    )
}