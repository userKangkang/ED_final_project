import Header from "@/Components/homeComponents/Navbar"
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Hat from "@/Components/homeComponents/Hat";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function HomePage() {
    return (
        <div>
            <div>
                <main className={"flex max-h-screen flex-col items-start p-0 min-w-screen bg-gradient-to-r  dark:from-[#0D001A] dark:to-[#180828] light:from-[#E4E4E7] light:to-[#FFEDFA]"}>
                    <div className={"flex items-center"}>
                        <Hat />
                        <div className="font-bold text-inherit ml-3">Welcome to AHAT!</div>
                    </div>
                    <Button as={Link} href={"/login"}>Log in</Button>
                    <Button as={Link} href={"/signup"}>Sign up</Button>
                    <form action={null}>
                    </form>
                </main>
            </div>
        </div>
    );
}

