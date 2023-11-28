"use server"
import { unstable_noStore as noStore } from 'next/cache';
import {sql} from "@vercel/postgres";

/**
 * Get all the id of the top data
 * This is used for dynamic route to generate the expected pages
 * @returns {Promise<QueryResultRow[]>}
 */
export default async function getTopDataIds() {
    noStore()
    try {
        const result = await sql`SELECT id FROM TopMessage order by date DESC;`;
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

/**
 * Get all the informatiion about the top data except content
 * this is used for the linker item in the middle of the page to display the right information
 * @returns {Promise<QueryResultRow[]>}
 */
export async function getTopDataLinks() {
    noStore();
    try {
        const result = await sql`SELECT id, usr, title, type, date FROM TopMessage order by date DESC;`;
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}


/**
 * Get the content of the top data by the id of the page
 * @param id You can find the id in [id]/page.js default function
 * note: this method seems doesn't need noStore();
 * @returns {Promise<void>}
 */
export async function getTopDataContent(id) {
    try {
        //TODO: get the content of the data needed for the top message to display by the id of the page

    } catch (error) {
        console.log(error);
    }
}