import {DATA1, DATA2} from "@/data/DataDemo";
import SearchBox from "@/Components/homeComponents/searchBox";
import TopMessages from "@/Components/homeComponents/topMessage";
import HistoryMessages from "@/Components/homeComponents/historyMessage";
import EditMode from "@/Components/detailBar/editMode";
import TextBox from "@/Components/newPage/textBox";

export default function Cs61b() {
    return (
        <>
            <div className={"w-96 border-solid border-r-2 border-gray-400 h-screen overflow-y-scroll"}>
                <SearchBox/>
                <TopMessages datas={DATA}/>
                <HistoryMessages datas={DATA2}/>
            </div>
            <div className={"w-7/12 border-solid border-gray-400 min-h-screen"}>
                This is Cs61b
            </div>
        </>

    )
}