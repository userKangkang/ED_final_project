"use server"
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import * as client from "@vercel/postgres";

export async function POST() {
        await sql`INSERT INTO Pets VALUES ('jackieleylfaiefha', 'Jacksonfesaf');`;

}

