'use server'
import {unstable_noStore as noStore} from "next/cache";
import {sql} from "@vercel/postgres";

/**
 *  Find the comments of the page using pageId
 *  Note: Jingfeng's thought about the structure of the submessages:
 *  id | pageId | usr | content | date
 *  id is the primary key
 *  and if lacking something, remember to add to the table structure
 *  I think we might need no store in this function.
 * @param pageId
 * @returns an array of submessages
 */
export async function getComments(pageId) {
    noStore();
    try {
        //TODO: Find the submessages of the page using pageId
        const result = await sql`SELECT * FROM CommentItem WHERE pageId = ${pageId};`;
        return result;
    } catch (error) {
        console.log(error);
    }
}