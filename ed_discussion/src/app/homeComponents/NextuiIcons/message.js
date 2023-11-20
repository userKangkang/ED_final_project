"use client"

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