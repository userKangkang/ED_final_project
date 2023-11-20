import Image from "next/image"
import {Button} from "@nextui-org/react";
export default function Icon({onClick=null, icon}) {
    return (
       <button id={icon.id} onClick={onClick} className={"border-1 rounded-[8px] border-gray-950 shadow"}>
           <Image src={icon.svg}
                  alt={icon.alt}
                  width={30}
                  height={30}
                  priority
                  />
       </button>
    )
}