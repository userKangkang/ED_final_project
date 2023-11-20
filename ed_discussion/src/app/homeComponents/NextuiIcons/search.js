"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";

export default function Search() {
    const search = {
        id : "search",
        svg : "/bx-search-alt-2.svg",
        alt : "search",
    }
    return (
        <Icon icon={search} borderWidth={0} shadow={false}/>
    )
}