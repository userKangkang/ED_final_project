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


export default function Layout({children}) {

    return (
        <>
            <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r light:from-[#F4F4F5] light:to-[##D4D4D8] dark:from-[#18181B] dark:to-[#18181B]"}>
                <div className={"w-1/3 max-w-[240px]  border-solid border-r-2 border-gray-400 min-h-screen flex flex-col items-start"}>
                    {/* 开始制作的时候将NewButton Classes LeftBar注释掉，取消PersonalSideBar的注释 */}
                    {/* 制作完成后请将PersonalSideBar注释掉，恢复原来的三个组件 */}
                    <NewButton/>
                    <Classes />
                    <LeftBar />
                    <table className={"w-full h-full text-white"}>
                        {/* <div>{data.rows[0].name}</div> */}
                    </table>
                </div>
                <div className={"w-96 border-solid border-r-2 border-gray-400 h-screen overflow-y-scroll min-w-[300px]"}>
                    <SearchBox/>
                    <MiddleLinks isquestion={true}/>
                    <MiddleLinks isquestion={false}/>
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