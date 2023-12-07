import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import UserPicture from "@/Components/homeComponents/UserPicture";
import HomeIcon from "@/Components/homeComponents/HomeIcon";
import Hat from "@/Components/homeComponents/Hat";

export default function Header() {
    return (
        <Navbar isBordered isBlurred={true} position={"static"} className={"font-serif bg-gradient-to-r from-[#9353D3] to-[#06B7DB] dark:from-[#481878] dark:to-[#301050]"}>
            <NavbarBrand>
                <div className={"flex items-center"}>
                    <Hat />
                    <p className="font-bold text-inherit ml-3">AHAT</p>
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="/courses/cs61b" aria-current="page">
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
