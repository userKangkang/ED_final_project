"use server"
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export default async function postQuestion(title, type, editor) {
    const usr = "Jingfeng Robot";
    const now = new Date();
    const date = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(0, 10) + " " + new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(11, 19);
    const id = Date.now();
    await sql`INSERT INTO themeMessage (Tid, usr, title, type, content, postTime) VALUES (${id}, ${usr}, ${title}, ${type}, ${editor}, ${date});`;
    revalidatePath("/courses");
    redirect("/courses/cs61b");
}

export async function postComment(id, editor) {
    const usr = "Jingfeng Robot";
    const now = new Date();
    const date = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(0, 10) + " " + new Date(now.getTime() - now.getTimezoneOffset() * 60000).toJSON().slice(11, 19);
    const commentId = Date.now();
    await sql`INSERT INTO CommentItem (cid, pageId, usr, context, detailedtime) VALUES (${commentId}, ${id}, ${usr}, ${editor}, ${date});`;
    revalidatePath("/courses/cs61b/"+id);
    redirect("/courses/cs61b/"+id);
}