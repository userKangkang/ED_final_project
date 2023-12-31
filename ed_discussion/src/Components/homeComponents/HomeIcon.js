"use client"
import Icon from "@/Components/homeComponents/Icon";

export default function HomeIcon() {
    const homeIcon = {
        id : "homeIcon",
        svg : "/home.svg",
        alt : "home icon",
    }
    return (
        <Icon icon={homeIcon} source={"/courses"}/>
    )
}