import NewButton from "@/Components/homeComponents/newButton";
import SearchBox from '@/Components/homeComponents/searchBox';
import TopMessages from '@/Components/homeComponents/topMessage';
import HistoryMessages from '@/Components/homeComponents/historyMessage';
import LeftBar from "@/Components/homeComponents/LeftBar";
import Classes from "@/Components/homeComponents/Classes";
import Header from "@/Components/homeComponents/Navbar"
import EditMode from '@/Components/detailBar/editMode';
import TextBox from "@/Components/newPage/textBox";
import PersonalSideBar from "@/Components/personalMessage/personalSidebar";
import PersonalSet from "@/Components/personalMessage/personalSet";
import { Link } from "@nextui-org/react";
import RootMode from "@/Components/detailBar/rootMode";




export default function HomePage() {
  return(
    <>
      <Header/>
      <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
       <Link href={"courses/cs61b"}>CS61B</Link>
      </main>
    </>
  );
}

