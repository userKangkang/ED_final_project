"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import Info from "./NextuiIcons/info";
import Message from "./NextuiIcons/message";
import { Link } from "@nextui-org/react";

export default function TopMessages(props) {

    const messageList = props.datas.map(data => {
        const icon = function () {
            if(data.isQuestion) {
                return <Message/>;
            } else {
                return <Info/>;
            }
        };
        const url = `/courses/cs61b/${data.id.toString()}`;
        // console.log(url);
        return(
            <ListboxItem key={data.id} className={"max-w-full text-white"} href={url} as={Link}>
                <div className="px-3 flex flex-col w-full h-16 justify-center" key={data.id}>
                <div className="flex my-1 flex-row items-center text-sm">
                    {icon()}
                    <span className={"truncate ml-3 text-sm"}>{data.title}</span>
                </div>
                <div className="flex flex-row items-center text-xs text-gray-600">
                    <span className={`text-${data.color} font-semibold mr-2`}>{data.type}</span>
                    <span className={"mr-2"}>{data.author}</span>
                    <span className={""}>{data.date}</span>
                </div>
            </div>
            </ListboxItem>
        );
    });

    return(
        <>
          <div className={"w-full h-5 bg-gray-400"}></div>
          <div className="w-full">
            
            <Listbox aria-label="Actions"
            className="w-full max-w-full">
                    {messageList}
            </Listbox>
            </div>
          {/* <div className={"my-0 mx-auto text-xs flex justify-center bg-white"}>更多</div> */}
        </>
    );
}