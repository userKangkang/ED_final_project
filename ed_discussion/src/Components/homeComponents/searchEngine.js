"use client"
import { React, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Search from "./NextuiIcons/search";
import {Input} from "@nextui-org/react";


export default function SearchEngine() {
    const [searchQuery, setSearchQuery] = useState("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleChange(event) {
        setSearchQuery(event.target.value);
    }

    function handleKeyPress(event) {
        if(event.key === 'Enter' && event.target.value !== ""){
            setSearchQuery(event.target.value);
            const params = new URLSearchParams(searchParams);
            params.set("query", searchQuery);
            replace(`${pathname}?${params.toString()}`);
        }
    }

    return (
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
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                defaultValue={searchParams.get("query")?.toString()}
            />

    );
}