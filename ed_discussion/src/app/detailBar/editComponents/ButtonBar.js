import React from "react";
import { Button } from "@nextui-org/react";
import Message from "@/app/homeComponents/NextuiIcons/message";
import Question from "@/app/homeComponents/NextuiIcons/question";

export default function ButtonBar(){
    return (
        <div className="my-1 py-1 px-2 w-full flex flex-row justify-center items-center">
            <Button variant="flat" color="secondary" className="w-6/12 mr-2">
            <Question/>
                问题
            </Button>
            <Button variant="flat" color="primary" className="w-6/12">
                <Message/>
                帖子
            </Button>
        </div>
    );
}