import {sql} from "@vercel/postgres";
import getTopDataIds from "@/app/api/routes/topMessage";

export async function generateStaticParams() {
    const ids = await getTopDataIds();
    return ids.map((row) => ({
                id: row.id.toString()
        })
    )
}

export default function Cs61bQuestions({params}) {
    const {id} = params;
    return (
        <div>
            This is {id}
            <h1>Hello {id}</h1>
        </div>
    )
}