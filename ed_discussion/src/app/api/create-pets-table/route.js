import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE MainMessage(
            id INT PRIMARY KEY,
            user VARCHAR(50),
            title TEXT,
            type VARCHAR(20),
            content JSON,
            date DATE,
            );`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}