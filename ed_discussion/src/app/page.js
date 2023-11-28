import Header from "@/Components/homeComponents/Navbar"
import {Button, Link} from "@nextui-org/react";
import {POST} from "@/app/api/add-pet";
import {sql} from "@vercel/postgres";
import getTopDataIds from "@/app/api/routes/topMessage";

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

