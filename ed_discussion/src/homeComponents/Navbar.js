import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import UserPicture from "@/homeComponents/UserPicture";
import HomeIcon from "@/homeComponents/HomeIcon";
import Hat from "@/homeComponents/Hat";

export default function Header() {
    return (
        <Navbar isBordered isBlurred={true} className={"bg-gradient-to-r from-[#481878] to-[#301050]"}>
            <NavbarBrand>
                <div className={"flex items-center"}>
                    <Hat />
                    <p className="font-bold text-inherit ml-3">Discussion</p>
                </div>
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