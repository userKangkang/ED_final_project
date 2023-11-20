"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";
import Image from "next/image";

export default function Search() {
    const search = {
        id : "search",
        svg : "/bx-search-alt-2.svg",
        alt : "search",
    }
    return (
        <div key={search.id} className={"rounded-2xl"}>
            <Image
                src={search.svg}
                alt={search.alt}
                width={30}
                height={30}
                />
        </div>
    )
}