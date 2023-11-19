import Gadget from "./Gadget"

export default function Bell() {
    const bell = {
        id : "bell",
        svg : "/bell.svg",
        alt : "Notify",
    };
    return (
        <Gadget onClick={null} gadget={bell} />
    )
}