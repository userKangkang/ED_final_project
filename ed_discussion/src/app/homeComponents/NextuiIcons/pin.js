"use client"

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