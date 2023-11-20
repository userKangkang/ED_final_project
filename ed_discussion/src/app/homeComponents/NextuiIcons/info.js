"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";
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