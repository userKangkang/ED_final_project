"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react"
import {ListboxWrapper} from "@/Components/homeComponents/ListBoxWrapper";
import TypeTitle from "@/Components/homeComponents/TypeTitle";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter, redirect } from "next/navigation";

export default function LeftBar() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleAction(key) {
        const params = new URLSearchParams(searchParams);
        params.delete("type");
        params.set("type", key);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <ListboxWrapper>
            <Listbox
                aria-label="Actions"
                onAction={(key) => handleAction(key)}
            >
                <ListboxItem key={"General"}>
                    <TypeTitle color="bg-red-500" name="General"/>
                </ListboxItem>
                <ListboxItem key={"Lectures"}>
                    <TypeTitle color="bg-orange-500" name="Lectures"/>
                </ListboxItem>
                <ListboxItem key={"Vitamins"}>
                    <TypeTitle color="bg-yellow-500" name="Vitamins"/>
                </ListboxItem>
                <ListboxItem key={"Projects"}>
                    <TypeTitle color="bg-green-500" name="Projects"/>
                </ListboxItem>
                <ListboxItem key={"Social"}>
                    <TypeTitle color="bg-blue-500" name="Social"/>
                </ListboxItem>
                <ListboxItem key={"All"}>
                    <TypeTitle color="bg-purple-500" name="All"/>
                </ListboxItem>
            </Listbox>
        </ListboxWrapper>
    )
}