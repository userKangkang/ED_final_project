"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";

export default function Pin() {
    const search = {
        id : "pin",
        svg : "/bxs-pin.svg",
        alt : "pin",
    }
    return (
        <Icon icon={search} borderWidth={0}/>
    )
}