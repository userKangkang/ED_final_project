"use client"
import Icon from "@/app/homeComponents/Icon";

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