"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";

export default function Info() {
    const search = {
        id : "info",
        svg : "/bx-info-circle.svg",
        alt : "info",
    }
    return (
        <Icon icon={search} borderWidth={0} shadow={false}/>
    )
}