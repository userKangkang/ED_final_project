import Image from 'next/image';
import Header from './Header';
import NewButton from "./homeComponents/newButton";
import TypeTitle from './homeComponents/typeTitle';
import SearchBox from './homeComponents/searchBox';
import TopMessages from './homeComponents/topMessage';
import HistoryMessages from './homeComponents/historyMessage';



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
      <Header/>
      <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen"}>
        <div className={"w-1/6 min-w-150px border-solid border-r-2 border-gray-400 min-h-screen flex flex-col items-start"}>
          <NewButton/>
          <div class={"text-xs self-start ml-2 text-gray-800 mt-4 mb-5"}>类别</div>
          <TypeTitle color="bg-red-500" name="General"/>
          <TypeTitle color="bg-orange-500" name="Lectures"/>
          <TypeTitle color="bg-yellow-500" name="Vitamins"/>
          <TypeTitle color="bg-green-500" name="Projects"/>
          <TypeTitle color="bg-blue-500" name="Social"/>
        </div>
        <div className={"w-96 border-solid border-r-2 border-gray-400 h-full"}>
          <SearchBox/>
          <TopMessages datas={DATA}/>
          <HistoryMessages datas={DATA2}/>
        </div>
        <div className={"w-7/12 border-solid border-gray-400 min-h-screen"}>detail message</div>
      </main>
    </>
  );
}

