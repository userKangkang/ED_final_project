export default function Header({children}) {
    return (
        <div className={"flex flex-col flex-wrap w-full"}>
            <ul className={"flex flex-grow justify-between"}>
                {children}
            </ul>
        </div>
    )
}