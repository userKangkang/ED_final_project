"use client"

import Icon from "@/Components/homeComponents/Icon";

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