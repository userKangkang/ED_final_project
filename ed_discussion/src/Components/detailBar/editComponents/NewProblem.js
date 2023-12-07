
import React from "react";
import {Navbar, Link, NavbarItem, NavbarContent, Button} from "@nextui-org/react";


export default function NewProblem(props) {
    return (
        <Navbar>
            <NavbarContent justify="start" self="center">
                <NavbarItem >
                    <Button as={Link} href="/courses/cs61b">取消</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="center" self="center">
                <NavbarItem >
                    <div>新{props.question ? "问题" : "帖子"}</div>
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