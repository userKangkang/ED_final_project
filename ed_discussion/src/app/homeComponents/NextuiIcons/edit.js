"use client"

import MessageIcon from "@/app/homeComponents/NextuiIcons/MessageIcon";

export default function Edit() {
    const search = {
        id : "edit",
        svg : "/bxs-edit.svg",
        alt : "search",
    }
    return (
        <MessageIcon icon={search}/>
    )
}