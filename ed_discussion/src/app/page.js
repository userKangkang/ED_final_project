import Header from "@/Components/homeComponents/Navbar"
import { Link } from "@nextui-org/react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function HomePage() {
    return (
        <div>
            <Header/>
            <div className={"dark"}>
                <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r  dark:from-[#0D001A] dark:to-[#180828] light:from-[#E4E4E7] light:to-[#FFEDFA]"}>

                    <Link href={"/login"}>Log in</Link>
                    <Link href={"/signup"}>Sign up</Link>
                    <Link href={"courses/cs61b"}>CS61B</Link>
                    <form action={null}>
                    </form>
                </main>
            </div>
        </div>
    );
}

