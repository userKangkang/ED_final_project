import Header from "@/Components/homeComponents/Navbar"
import { Link } from "@nextui-org/react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function HomePage() {
    return (
        <>
            <Header/>
            <main
                className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
                <Link href={"courses/cs61b"}>CS61B</Link>
                <form action={null}>
                </form>
            </main>
        </>
    );
}

