"use server"
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import { auth } from "@/auth";
import getUser from "@/app/api/getuser";

export default async function postQuestion(title, type, editor, isQuestion) {
    const {user} = await auth();
    const {email} = user;
    const userData = await getUser(email);
    const usr = userData.username;
    const now = new Date();
    const date = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(0, 10) + " " + new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(11, 19);
    const id = Date.now();
    await sql`INSERT INTO themeMessage (Tid, usr, title, type, content, postTime, email, isQuestion) VALUES (${id}, ${usr}, ${title}, ${type}, ${editor}, ${date}, ${email}, ${isQuestion});`;
    revalidatePath("/courses");
    redirect("/courses/cs61b");
}

export async function postComment(id, editor) {
    const {user} = await auth();
    const {email} = user;
    const userData = await getUser(email);
    const usr = userData.username;
    const now = new Date();
    const date = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(0, 10) + " " + new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(11, 19);
    const commentId = Date.now();
    await sql`INSERT INTO CommentItem (cid, pageId, usr, context, detailedtime, email) VALUES (${commentId}, ${id}, ${usr}, ${editor}, ${date}, ${email});`;
    revalidatePath("/courses/cs61b/"+id);
    redirect("/courses/cs61b/"+id);
}

export async function modifyAvatar(url, email) {
    await sql`UPDATE usrs SET avatar = ${url} WHERE email = ${email}`;
    revalidatePath("/courses/profile");
    redirect("/courses/profile");
}