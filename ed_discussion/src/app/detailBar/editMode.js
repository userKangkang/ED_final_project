import React from "react";
import {Image} from "@nextui-org/react";
import ButtonBar from "./editComponents/ButtonBar";
import NewProblem from "./editComponents/NewProblem";
import TitleBar from "./editComponents/TitleBar";
import SwitchType from "./editComponents/SwitchType";

export default function EditMode() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <NewProblem/>
        <div className="w-full h-full flex flex-col items-center justify-center px-3">
            <ButtonBar/>
            <TitleBar/>
            <SwitchType/>
        </div>
    </div>
    
  );
}