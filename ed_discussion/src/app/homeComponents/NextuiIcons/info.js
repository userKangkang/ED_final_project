"use client"

import MessageIcon from "@/app/homeComponents/NextuiIcons/MessageIcon";

export default function Info() {
    const search = {
        id : "info",
        svg : "/bx-info-circle.svg",
        alt : "info",
    }
    return (
        <MessageIcon icon={search}/>
    )
}