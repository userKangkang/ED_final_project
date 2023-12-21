import { useState } from "react";
import {Button} from "@nextui-org/react";

export default async function HomePage() {
    return (
        <div className="flex justify-center gap-80 items-center w-full py-8">
            <Button
                color="success"
                onClick={() => {
                    setSelectedNav("1");
                    document.getElementById("section1").scrollIntoView({behavior: "smooth"});
                }}
                className={selectedNav === "1" ? "text-gray-50 font-bold" : "text-gray-50"}
            >
                1
            </Button>
            <Button
                color="primary"
                onClick={() => {
                    setSelectedNav("2");
                    document.getElementById("section2").scrollIntoView({behavior: "smooth"});
                }}
                className={selectedNav === "2" ? "text-gray-50 font-bold" : "text-gray-50"}
            >
                2
            </Button>
            <Button
                color="warning"
                onClick={() => {
                    setSelectedNav("3");
                    document.getElementById("section3").scrollIntoView({behavior: "smooth"});
                }}
                className={selectedNav === "3" ? "text-gray-50 font-bold" : "text-gray-50"}
            >
                3
            </Button>
        </div>

    )
}
