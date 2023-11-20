import Image from "next/image"
import {Button} from "@nextui-org/react";

/** This class is only used for top nav bar,
 *  It is button !!!
 * @param onClick
 * @param icon
 * @param borderWidth
 * @param shadow
 * @returns {JSX.Element}
 * @constructor
 */
export default function Icon({onClick=null, icon}) {
    return (
            <Button isIconOnly key={icon.id} onClick={onClick} className={"shadow-lg hover:shadow-purple-800"}>
                <Image src={icon.svg}
                       alt={icon.alt}
                       width={30}
                       height={30}
                       priority
                />
            </Button>
    )
}