import PersonalSideBar from "@/Components/personalMessage/personalSidebar";
import PersonalSet from "@/Components/personalMessage/personalSet";
import * as React from "react";



export default function HomePage() {


  return(
    <>
      {/* <Header/> */}
      <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>
        <div className={"w-1/6 w-72 border-solid border-r-2 border-gray-400 min-h-screen flex flex-col items-start"}>
          <PersonalSideBar/>
        </div>
        
        <div className={"w-5/6 border-solid border-l-2 border-gray-400 min-h-screen overflow-y-scroll"}>
          <PersonalSet/>
        </div>
      </main>
    </>
  );
}

