import PersonalSet from "@/Components/personalMessage/personalSet";
import * as React from "react";
import Header from "@/Components/homeComponents/Navbar";
import PersonalSideBar from "@/Components/personalMessage/personalSidebar";


export default function HomePage() {
  return(
    <>
        <div className={"w-5/6 border-solid border-l-2 border-gray-400 min-h-screen overflow-y-scroll"}>
          <PersonalSet/>
        </div>
    </>
  );
}

