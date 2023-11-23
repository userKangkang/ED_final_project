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
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";


const DATA = [
  {id: "01", isQuestion: true, title: "Lecture Time this week", color: "red-500", type: "General", author: "Jingfeng Sun", date: "Yesterday"},
  {id: "02", isQuestion: true, title: "Final Project: SEP QLink", color: "red-500", type: "General", author: "Weiquan Huang", date: "2 Days Ago"},
  {id: "03", isQuestion: false, title: "Lecture Announcement: The Exercise Lesson will be at the Room 213", color: "yellow-500", type: "Lecture", author: "Mr. Li", date: "Last Week"},
];

const DATA2 = [
  {id: "01", isQuestion: true, title: "Lecture Time this week", color: "red-500", type: "General", author: "Jingfeng Sun", date: "Yesterday"},
  {id: "02", isQuestion: true, title: "Final Project: SEP QLink", color: "red-500", type: "General", author: "Weiquan Huang", date: "2 Days Ago"},
  {id: "03", isQuestion: false, title: "Lecture Announcement: The Exercise Lesson will be at the Room 213", color: "yellow-500", type: "Lecture", author: "Mr. Li", date: "Last Week"},
  {id: "04", isQuestion: false, title: "Lecture Announcement: The Exercise Lesson will be at the Room 213", color: "yellow-500", type: "Lecture", author: "Mr. Li", date: "Last Week"},
  {id: "05", isQuestion: true, title: "Lecture Announcement: The Exercise Lesson will be at the Room 213", color: "green-500", type: "Projects", author: "Mr. Li", date: "Last Week"},
  {id: "06", isQuestion: false, title: "Lecture Announcement: The Exercise Lesson will be at the Room 213", color: "yellow-500", type: "Lecture", author: "Mr. Li", date: "Last Week"},
  {id: "07", isQuestion: false, title: "Lecture Announcement: The Exercise Lesson will be at the Room 213", color: "yellow-500", type: "Lecture", author: "Mr. Li", date: "Last Week"},
];

export default function HomePage() {


  return(
    <>
      {/* <Header/> */}
      <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
        <div className={"w-1/6 w-72 border-solid border-r-2 border-gray-400 min-h-screen flex flex-col items-start"}>
          <PersonalSideBar/>
        </div>
        
        <div clasName={"w-5/6 border-solid border-l-2 border-gray-400 min-h-screen overflow-y-scroll"}>
          <PersonalSet/>
        </div>
      </main>
    </>
  );
}

