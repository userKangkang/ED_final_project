"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";

export default function Message() {
    const search = {
        id : "message",
        svg : "/bxs-message-dots.svg",
        alt : "message",
    }
    return (
        <Icon icon={search} borderWidth={0} shadow={false}/>
    )
}