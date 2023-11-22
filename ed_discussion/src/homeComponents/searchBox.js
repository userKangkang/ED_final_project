import React from "react";
import {Input} from "@nextui-org/react";
import Search from "@/homeComponents/NextuiIcons/search";

export default function SearchBox() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                radius={"sm"}
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "bg-default/60",
                        "dark:bg-default",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focused=true]:bg-default-200/60",
                        "dark:group-data-[focused=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}
                type="search"
                placeholder="Search"
                labelPlacement="outside"
                startContent={
                <Search />
                }
            />
        </div>
    );
}
