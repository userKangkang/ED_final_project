import NewButton from "@/Components/homeComponents/newButton";
import SearchBox from '@/Components/homeComponents/searchBox';
import TopMessages from '@/Components/homeComponents/topMessage';
import HistoryMessages from '@/Components/homeComponents/historyMessage';
import LeftBar from "@/Components/homeComponents/LeftBar";
import Classes from "@/Components/homeComponents/Classes";
import Header from "@/Components/homeComponents/Navbar"
import EditMode from '@/Components/detailBar/editMode';
import TextBox from "@/Components/newPage/textBox";
import {DATA, DATA2} from "@/data/Data";


export default function Page() {
  return(
    <>
        <div className={"w-7/12 border-solid border-gray-400 min-h-screen"}>
          <EditMode/>
          <TextBox />
          {/* <RootMode/> */}
        </div>
    </>
  );
}

