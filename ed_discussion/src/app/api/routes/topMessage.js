"use server"
import { unstable_noStore as noStore } from 'next/cache';
import {sql} from "@vercel/postgres";

export default async function getTopDataIds() {
    noStore()
    try {
        const result = await sql`SELECT id FROM TopMessage order by date DESC;`;
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

export async function getTopDataLinks() {
    noStore();
    try {
        const result = await sql`SELECT id, usr, title, type, date FROM TopMessage order by date DESC;`;
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}