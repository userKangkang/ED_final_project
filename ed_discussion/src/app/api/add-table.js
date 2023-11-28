"use server"
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import * as client from "@vercel/postgres";

/**
 * I left this function to make it easier for us to add tables in the future
 * @returns {Promise<void>}
 * @constructor
 */
export async function POST() {
        await sql`Drop TABLE TopMessage;`;
        await sql`CREATE TABLE TopMessage(
            id BIGINT PRIMARY KEY,
            usr VARCHAR(50),
            title TEXT,
            type VARCHAR(20),
            content JSON,
            date DATE
            );`;
}

export async function ids() {
    const ids = await sql`SELECT id FROM TopMessage;`;
    console.log(ids);
}

