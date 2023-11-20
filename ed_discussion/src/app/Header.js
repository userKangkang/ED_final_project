export default function Header() {
    return (
        <nav className={"flex flex-col flex-wrap w-full bg-gray-500"}>
            <ul className={"flex flex-grow justify-between"}>
                <li className={"p-2"}>
                    {/* <Bell /> */}
                </li>
                <li className={"p-2 grid grid-cols-2 gap-0"}>
                    {/* <HomeButton />
                    <ProfileButton person={jingfeng}/> */}
                </li>
            </ul>
        </nav>
    )
}