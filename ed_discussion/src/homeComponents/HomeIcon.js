"use client"
import Icon from "@/homeComponents/Icon";

export default function HomeIcon() {
    const homeIcon = {
        id : "homeIcon",
        svg : "/home.svg",
        alt : "home icon",
    }
    return (
        <Icon icon={homeIcon} />
    )
}