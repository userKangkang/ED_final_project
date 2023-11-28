import {sql} from "@vercel/postgres";
import getTopDataIds from "@/app/api/routes/topMessage";

/**
 * You don't need to care about this function
 * which is only used to generate dynamic routes
 * If you are interested, you can search generateStaticParams in the nextjs document
 * @returns {Promise<*>}
 */
export async function generateStaticParams() {
    const ids = await getTopDataIds();
    return ids.map((row) => ({
                id: row.id.toString()
        })
    )
}

/**
 * This function will place the content of the middle and right part of the page
 * The id of the page is provided for you.
 * @param params
 * @returns {JSX.Element}
 * @constructor
 */
export default function Cs61bQuestionsPage({params}) {
    const {id} = params;
    return (
        <div>
            This is {id}
            <h1>Hello {id}</h1>
        </div>
    )
}