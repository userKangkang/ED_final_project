import Image from "next/image"
export default function Gadget({gadget, onClick}) {
    return (
        <div className = "group shadow-lg  hover:shadow-cyan-500/75 flex flex-col align-middle bg-grey-500 rounded-[4px] w-9" key={gadget.id}>
            <button className="p-0" onClick={onClick}>
                <Image src={gadget.svg}
                       alt={gadget.alt}
                       className="dark:invert"
                       width={36}
                       height={36}
                       priority
                       />
            </button>
        </div>
    )
}