import {topData} from "@/app/courses/layout";
import SearchBox from "@/Components/homeComponents/searchBox";
import TopMessages from "@/Components/homeComponents/topMessage";
import HistoryMessages from "@/Components/homeComponents/historyMessage";
import RootMode from "@/Components/detailBar/rootMode";
import {DATA2} from "@/data/DataDemo";

export default function Cs61b() {
    const DATA1 = topData.rows.map((row) => ({
        id: row.id,
        title: row.title,
        isQuestion: true,
        type: row.type,
        color: "red-500",
        author: row.usr,
        date: new Date(row.date).toLocaleDateString(),
    }))
    return (
        <>
            <div className={"w-96 border-solid border-r-2 border-gray-400 h-screen overflow-y-scroll"}>
                <SearchBox/>
                <TopMessages datas={DATA1}/>
                <HistoryMessages datas={DATA2}/>
            </div>
            <div className={"w-7/12 border-solid border-gray-400 min-h-screen"}>
                <RootMode />
            </div>
        </>

    )
}