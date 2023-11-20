"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";

export default function Edit() {
    const search = {
        id : "edit",
        svg : "/bxs-edit.svg",
        alt : "search",
    }
    return (
        <Icon icon={search} className="border-1" borderWidth={0} shadow={false}/>
    )
}