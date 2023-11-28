"use server"
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export default async function postQuestion(title, type, editor) {
    const usr = "Jingfeng Robot";
    const date = new Date().toJSON().slice(0, 10);
    const id = Date.now();
    await sql`INSERT INTO TopMessage (id, usr, title, type, content, date) VALUES (${id}, ${usr}, ${title}, ${type}, ${editor}, ${date});`;
    revalidatePath("/courses");
    redirect("/courses/cs61b");
}