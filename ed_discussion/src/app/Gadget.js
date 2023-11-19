import Image from "next/image"
export default function Gadget({gadget, onClick}) {
    return (
        <div className = "group shadow-lg shadow-cyan-500/75 hover:shadow-inner flex flex-col align-middle bg-cyan-500 rounded-[4px]" key={gadget.id}>
            <button className="" onClick={onClick}>
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