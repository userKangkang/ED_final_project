import Header from "@/Components/homeComponents/Navbar";
import NewButton from "@/Components/homeComponents/newButton";
import Classes from "@/Components/homeComponents/Classes";
import LeftBar from "@/Components/homeComponents/LeftBar";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

async function getData() {
    const data = await sql`SELECT * FROM Pets;`;
    console.log(data.rows);
    console.log(data);
    return data;
}

export default async function Layout({children}) {

    const data = await getData();

    return (
        <>
            <Header/>
            <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
                <div className={"w-1/6 w-72 border-solid border-r-2 border-gray-400 min-h-screen flex flex-col items-start"}>
                    {/* 开始制作的时候将NewButton Classes LeftBar注释掉，取消PersonalSideBar的注释 */}
                    {/* 制作完成后请将PersonalSideBar注释掉，恢复原来的三个组件 */}
                    <NewButton/>
                    <Classes />
                    <LeftBar />
                    <table className={"w-full h-full text-white"}>
                        <div>{data.rows[0].name}</div>
                    </table>
                </div>
                {/* 开始制作的时候将下面的两个div注释掉，替代为PersonalSet */}
                {/* 制作完成后请恢复原样，即取消div的注释，给PersonalSet加注释 */}
                    {children}
            </main>
        </>
    )
}