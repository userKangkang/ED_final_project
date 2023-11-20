"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";
import MessageIcon from "@/app/homeComponents/NextuiIcons/MessageIcon";

export default function Message() {
    const search = {
        id : "message",
        svg : "/bxs-message-dots.svg",
        alt : "message",
    }
    return (
        <MessageIcon icon={search} />
    )
}