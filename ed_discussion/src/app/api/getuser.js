import {sql} from "@vercel/postgres";

export default async function getUser(email) {
    try {
        const user = await sql`SELECT * FROM usrs WHERE email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}