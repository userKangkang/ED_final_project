"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";
import MessageIcon from "@/app/homeComponents/NextuiIcons/MessageIcon";

export default function Pin() {
    const search = {
        id : "pin",
        svg : "/bxs-pin.svg",
        alt : "pin",
    }
    return (
        <MessageIcon icon={search}/>
    )
}