"use client"

import MessageIcon from "@/Components/homeComponents/NextuiIcons/MessageIcon";

export default function Info() {
    const search = {
        id : "info",
        svg : "/question.svg",
        alt : "info",
    }
    return (
        <MessageIcon icon={search}/>
    )
}