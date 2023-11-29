import {sql} from "@vercel/postgres";
import { placeTopMessageContent } from "./placeMessageContent";
import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {getComments} from "@/app/api/routes/subMessages";
import {getTopDataIds} from "@/app/api/routes/topMessage";
import SubmitForm from "@/app/courses/cs61b/[id]/submitForm";

export async function generateDynamicParams() {
    const datas = await getTopDataIds();
    return datas.map((row) => ({
                id: row.id,
        })
    )
}

export default async function Cs61bQuestions({params}) {
    const {id} = params;
    const idData = await placeTopMessageContent(id);
    const eachTopMessageLine = idData.content.map((row) => {
        if (row.type === 'image') {
            // eslint-disable-next-line react/jsx-key
            return <li><Image src={row.attrs.src} className={"w-full"}/></li>
        } else {
            // eslint-disable-next-line react/jsx-key
            return <li><p>{row.content[0].text}</p></li>
        }
    })

    const comments = await getComments(id);
    const commentsDatas = comments.rows.map((row) => (
        <ul key={row.id}>
            <li>{row.usr}</li>
            <li>{row.detailedtime.toLocaleString()}</li>
            <li>{row.context}</li>
        </ul>
    ));

    return (
        <div>
            <h1>{idData.title}</h1>
            <div className="flex flex-row w-full">
                <div className="flex-start flex flex-row">
                    <Image src="/SJTU.png" width={40} height={40}/>
                    <div className="flex flex-col">
                        <div className="text-500-red">{idData.usr}</div>
                        <div className="text-500-gray">{idData.date.toLocaleDateString()}</div>
                    </div>
                </div>
                <div className="flex-end flex flex-row">
                    <div className="text-500-gray">2 stars</div>
                    <div className="text-500-gray">2 likes</div>
                </div>
            </div>
            <div className="w-full">
                <div className="text-white">
                    <ul>{eachTopMessageLine}</ul>
                </div>
                
                {commentsDatas}
            </div>
            <SubmitForm id={id}/>
        </div>
    )
}