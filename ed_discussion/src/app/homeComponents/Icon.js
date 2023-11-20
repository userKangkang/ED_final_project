import Image from "next/image"
import {Button} from "@nextui-org/react";
export default function Icon({onClick=null, icon}) {
    return (
        <div className={"shadow-lg hover:shadow-purple-800 border-1 rounded-[8px] border-gray-950 w-9 h-9 flex justify-center"}>
            <button id={icon.id} onClick={onClick}>
                <Image src={icon.svg}
                       alt={icon.alt}
                       width={30}
                       height={30}
                       priority
                />
            </button>
        </div>
    )
}