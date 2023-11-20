"use client"

import Image from "next/image";

//TODO: onClick function
export default function Search({onClick=null}) {
    const search = {
        id : "search",
        svg : "/bx-search-alt-2.svg",
        alt : "search",
    }
    return (
        <div key={search.id}>
                <Image
                    src={search.svg}
                    alt={search.alt}
                    width={30}
                    height={30}
                />
        </div>
    )
}