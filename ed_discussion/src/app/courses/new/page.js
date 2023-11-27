import NewButton from "@/Components/homeComponents/newButton";
import SearchBox from '@/Components/homeComponents/searchBox';
import TopMessages from '@/Components/homeComponents/topMessage';
import HistoryMessages from '@/Components/homeComponents/historyMessage';
import LeftBar from "@/Components/homeComponents/LeftBar";
import Classes from "@/Components/homeComponents/Classes";
import EditMode from '@/Components/detailBar/editMode';
import TextBox from "@/Components/newPage/textBox";
import {DATA1, DATA2} from "@/data/DataDemo";


export default function NewThemePage({params}) {
    return (
        <>
      <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
        {/* 开始制作的时候将下面的两个div注释掉，替代为PersonalSet */}
        {/* 制作完成后请恢复原样，即取消div的注释，给PersonalSet加注释 */}
        <div className={"w-96 border-solid border-r-2 border-gray-400 h-screen overflow-y-scroll"}>
          <SearchBox/>
          <TopMessages datas={DATA1}/>
          <HistoryMessages datas={DATA2}/>
        </div>
        <div className={"w-7/12 border-solid border-gray-400 min-h-screen"}>
          <EditMode/>
          <TextBox />
        </div>
      </main>
    </>
    );
}