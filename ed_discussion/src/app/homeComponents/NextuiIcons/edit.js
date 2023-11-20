"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";
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