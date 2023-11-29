import React from "react";
import {Input} from "@nextui-org/react";
import Search from "@/Components/homeComponents/NextuiIcons/search";
import SearchEngine from "@/Components/homeComponents/searchEngine";

export default function SearchBox() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <SearchEngine/>
            {/* <Input/> */}
        </div>
    );
}
