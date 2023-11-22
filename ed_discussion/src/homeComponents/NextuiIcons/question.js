"use client"

import MessageIcon from "@/homeComponents/NextuiIcons/MessageIcon";

export default function Question() {
    const search = {
        id : "question",
        svg : "/question.svg",
        alt : "question",
    }
    return (
        <MessageIcon icon={search}/>
    )
}