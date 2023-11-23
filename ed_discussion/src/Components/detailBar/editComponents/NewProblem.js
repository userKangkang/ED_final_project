
import React from "react";
import { Navbar, Link, NavbarItem, NavbarContent } from "@nextui-org/react";


export default function NewProblem() {
    return (
        <Navbar>
            <NavbarContent justify="start" self="center">
                <NavbarItem >
                    <Link href="/">取消</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="center" self="center">
                <NavbarItem >
                    <div>新问题</div>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" self="center">
                <NavbarItem>
                    <Link href="#">发帖</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}