
import React from "react";
import {Navbar, Link, NavbarItem, NavbarContent, Button} from "@nextui-org/react";


export default function NewProblem() {
    return (
        <Navbar>
            <NavbarContent justify="start" self="center">
                <NavbarItem >
                    <Link hre="/">取消</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="center" self="center">
                <NavbarItem >
                    <div>新问题</div>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" self="center">
                <NavbarItem>
                    <Button type={"submit"}>发帖</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}