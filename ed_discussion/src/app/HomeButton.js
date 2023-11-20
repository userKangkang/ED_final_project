"use client"
import Image from "next/image"
import Gadget from "@/app/Gadget";

function ring() {
    alert("Ringing");
}
export default function HomeButton() {
    const me = {
        id : "Jingfeng",
        svg : "/ringingbell.svg",
        alt : "Jingfeng Sun's picture"
    }
    return (
        <Gadget gadget={me} onClick={ring} />
    )
}