import Header from "@/Components/homeComponents/Navbar";
import NewButton from "@/Components/homeComponents/newButton";
import Classes from "@/Components/homeComponents/Classes";
import LeftBar from "@/Components/homeComponents/LeftBar";
import {DATA2} from "@/data/DataDemo";
import {getTopDataLinks} from "@/app/api/routes/topMessage";
import SearchBox from "@/Components/homeComponents/searchBox";
import TopMessages from "@/Components/homeComponents/topMessage";
import HistoryMessages from "@/Components/homeComponents/historyMessage";

import {sql} from "@vercel/postgres";
import MiddleLinks from "@/app/courses/middlelinks";

export const dynamicParams = false;

export const topData = await sql`SELECT * FROM TopMessage order by date DESC;`;
// console.log(topData);

export default function Layout({children}) {

    return (
        <>
            <Header/>
            <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#18181B] to-[#18181B]"}>
                <div className={"w-1/6 w-72 border-solid border-r-2 border-gray-400 min-h-screen flex flex-col items-start"}>
                    {/* 开始制作的时候将NewButton Classes LeftBar注释掉，取消PersonalSideBar的注释 */}
                    {/* 制作完成后请将PersonalSideBar注释掉，恢复原来的三个组件 */}
                    <NewButton/>
                    <Classes />
                    <LeftBar />
                    <table className={"w-full h-full text-white"}>
                        {/* <div>{data.rows[0].name}</div> */}
                    </table>
                </div>
                <div className={"w-96 border-solid border-r-2 border-gray-400 h-screen overflow-y-scroll"}>
                    <SearchBox/>
                    <MiddleLinks />
                </div>
                {/* 开始制作的时候将下面的两个div注释掉，替代为PersonalSet */}
                {/* 制作完成后请恢复原样，即取消div的注释，给PersonalSet加注释 */}
                <div className={"w-full border-solid border-gray-400 h-screen overflow-y-scroll flex"}>
                    {children}
                </div>
                    
            </main>
        </>
    )
}