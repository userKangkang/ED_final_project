import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import UserPicture from "@/app/homeComponents/UserPicture";
import HomeIcon from "@/app/homeComponents/HomeIcon";

export default function Header() {
    return (
        <Navbar isBordered isBlurred={true} className={"bg-gradient-to-r from-[#180828] to-gray-900"}>
            <NavbarBrand>
                <p className="font-bold text-inherit">Discussion</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        CS61B
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <HomeIcon />
                </NavbarItem>
                <NavbarItem>
                    {/* TODO: personal information */}
                    <UserPicture person={null} />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
