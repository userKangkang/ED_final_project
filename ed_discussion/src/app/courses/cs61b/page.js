import {DATA1, DATA2} from "@/data/DataDemo";
import SearchBox from "@/Components/homeComponents/searchBox";
import TopMessages from "@/Components/homeComponents/topMessage";
import HistoryMessages from "@/Components/homeComponents/historyMessage";
import RootMode from "@/Components/detailBar/rootMode";

export default function Cs61b() {
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