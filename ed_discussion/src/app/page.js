import Header from "@/Components/homeComponents/Navbar"
import {Button, Link} from "@nextui-org/react";
import {POST} from "@/app/api/add-pet";
import {sql} from "@vercel/postgres";
import {ids} from "@/app/api/add-pet";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function HomePage() {
    await ids();
    return (
        <>
            <Header/>
            <main
                className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
                <Link href={"courses/cs61b"}>CS61B</Link>
                <form action={ids}>
                   <Button type={"submit"}>发帖</Button>
                </form>
            </main>
        </>
    );
}

