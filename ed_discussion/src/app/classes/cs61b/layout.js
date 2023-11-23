import Header from "@/Components/homeComponents/Navbar";
import NewButton from "@/Components/homeComponents/newButton";
import Classes from "@/Components/homeComponents/Classes";
import LeftBar from "@/Components/homeComponents/LeftBar";
import SearchBox from "@/Components/homeComponents/searchBox";
import TopMessages from "@/Components/homeComponents/topMessage";
import {DATA, DATA2} from "@/data/Data";
import HistoryMessages from "@/Components/homeComponents/historyMessage";

export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
                <div className={"w-1/6 w-72 border-solid border-r-2 border-gray-400 min-h-screen flex flex-col items-start"}>
                    <NewButton/>
                    <Classes />
                    <LeftBar />
                </div>
                <div className={"w-96 border-solid border-r-2 border-gray-400 h-screen overflow-y-scroll"}>
                    <SearchBox/>
                    <TopMessages datas={DATA}/>
                    <HistoryMessages datas={DATA2}/>
                </div>
                {children}
            </main>
        </div>
    );
}