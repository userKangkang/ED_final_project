"use client"

import HomeIcon from "@/app/homeComponents/HomeIcon";
import Icon from "@/app/homeComponents/Icon";

export default function Hat() {
    const hat = {
        id : "hat",
        svg : "/hat.svg",
        alt : "academic hat",
    }
    return (
        <Icon icon={hat} />
    )
}