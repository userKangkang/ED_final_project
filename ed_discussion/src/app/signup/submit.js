"use server"
import {sql} from "@vercel/postgres";
import bcrypt from "bcrypt";
import {permanentRedirect, redirect} from "next/navigation";
import {NextResponse} from "next/server";

export async function onSignUp(email, password, confirmPassword, username) {
    if (password !== confirmPassword) {
        console.log("passwords don't match");
    } else {
        try {
            console.log(typeof password);
            const hashPassword = await bcrypt.hash(password, 10);
            const avatar = "";
            await sql `INSERT INTO usrs (email, pass, username, avatar, identi) VALUES (${email}, ${hashPassword}, ${username}, ${avatar}, ${"Staff"});`;
        } catch (error) {
            console.log(error);
        }
        redirect("/login");
    }
}