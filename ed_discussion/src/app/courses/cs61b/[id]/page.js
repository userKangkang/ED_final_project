import {sql} from "@vercel/postgres";

export async function generateStaticParams() {
    const ids = await sql`SELECT id FROM TopMessage;`;

    return ids.rows.map((row) => ({
        id: row.id,
    }))
}

export default function Cs61b(params) {
    return (
        <div>
            This is {params.id}
        </div>
    )
}