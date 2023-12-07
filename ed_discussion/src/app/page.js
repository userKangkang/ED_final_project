import React from "react";
import {Link} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {EnterHeader} from "@/app/header";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function HomePage() {
    return (
        <main className={" light flex flex-col dark:from-[#0D001A] dark:to-[#180828] light:from-[#E4E4E7] light:to-[#FFEDFA]"}>
            <div className="flex flex-col ">
                <div className="flex flex-col justify-center border-solid border-2 border-indigo-600 rounded-lg">
                    <div className="">
                        <p className="flex flex-row px-50 justify-center font-semibold text-3xl">Join us!</p>
                    </div>
                    <div className="flex justify-center gap-80 items-center w-full py-8">
                        <Button color="success"><Link href={"courses/cs61b"} className="text-gray-50 w-full">Login</Link></Button> 
                        <Button color="primary"><Link className="text-gray-50">Register</Link></Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <Divider className="my-300"></Divider>
            </div>
            <div className="py-8 flex flex-row justify-center">
                Function
            </div>
            <div className="flex flex-row">
                <Divider className="my-300"></Divider>
            </div>
            <div className="py-8 flex flex-row justify-center">
                Advantages
            </div>
            <div className="flex flex-row">
                <Divider className="my-300"></Divider>
            </div>
            <div className="py-8 flex flex-row justify-center">
                Suggestions
            </div>
            <div className="flex flex-row">
                <Divider className="my-300"></Divider>
            </div>
            <div className="flex flex-row justify-center">
                const copyright = '\u00A9';
                console.log(copyright)
            </div>
            <form action={null}>
            </form>
        </main>
    );
}

