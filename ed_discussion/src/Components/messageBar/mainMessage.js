import React from "react";
import {Image} from "@nextui-org/react";

export default function MainMessage() {
    return(
        <div>
            <h1>How can we tell if a lab is deemed imcomplete?</h1>
            <div className="flex flex-row w-full">
                <div className="flex-start flex flex-row">
                    <Image src="/SJTU.png" width={40} height={40}/>
                    <div className="flex flex-col">
                        <div className="text-500-red">Liam Newsam</div>
                        <div className="text-500-gray">2021-10-10 10:10:10</div>
                    </div>
                </div>
                <div className="flex-end flex flex-row">
                    <div className="text-500-gray">2 stars</div>
                    <div className="text-500-gray">2 likes</div>
                </div>
            </div>
            <div className="w-full">
                <div className="text-white">How can we tell if a lab is deemed incomplete? 
                All I see in gradescope are either "Submitted" or posints out of total points(eg 6/7).</div>
                <div>评论</div>
            </div>
        </div>
    );
}