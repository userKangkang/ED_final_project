import Image from "next/image";

export default function MessageIcon({icon}) {
    return (
        <Image src={icon.svg}
               alt={icon.alt}
               width={20}
               height={20}
               priority
        />
    )
}