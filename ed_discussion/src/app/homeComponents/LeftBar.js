"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react"
import {ListboxWrapper} from "@/app/homeComponents/ListBoxWrapper";
import TypeTitle from "@/app/homeComponents/TypeTitle";

export default function LeftBar() {
    return (
        <ListboxWrapper>
            <Listbox
                aria-label="Actions"
                onAction={(key) => alert(key)}
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
            </Listbox>
        </ListboxWrapper>
    )
}