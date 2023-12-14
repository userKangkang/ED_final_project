"use client"
import React from "react";
import {DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import logOut from "@/app/api/routes/logout";

export default function UserPicture({person}) {
    return (
        <Dropdown placement="bottom-end" className={"bg-blue-600 dark:bg-purple-950 shadow-2xl"}>
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={person.username}
                    size="sm"
                    src={person.avatar}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant={"flat"}>
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{person.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">
                    <Link href={"/courses/profile"} className={"text-white"}>My Settings</Link>
                </DropdownItem>
                <DropdownItem key={"notifications"}>Notifications</DropdownItem>
                <DropdownItem key="logout" color="danger">
                    <form action={logOut}>
                        <button type="submit" className="w-full h-full flex">
                            Log out
                        </button>
                    </form>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        )
}