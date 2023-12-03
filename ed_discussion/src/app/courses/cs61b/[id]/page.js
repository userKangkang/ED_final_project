import {sql} from "@vercel/postgres";
import { placeTopMessageContent } from "./placeMessageContent";
import {Image, User} from "@nextui-org/react";
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
            return <li><Image src={row.attrs.src} alt={"image"} className={"px-4 py-3"}/></li>
        } else {
            // eslint-disable-next-line react/jsx-key
            return <li><p className="px-2 font-mono text-2xl">{row.content[0].text}</p></li>
        }
    })

    const comments = await getComments(id);
    const commentsDatas = comments.rows.map((row) => (

        <ul key={row.id} className={"m-2"}>
            <li>
                <User
                key={row.id}
                name={row.usr}
                description={"staff"}
                avatarProps={{
                    src: "/Yukinoshita.jpeg",
                    name: row.usr,
                }}
            />
            </li>
            <li>{row.detailedtime.toLocaleString()}</li>
            <li>{row.context}</li>
        </ul>
    ));


    return (
        <div className={"w-full"}>
            <div className="flex flex-col text-violet-300 text-4xl mb-3">
                <h1 className="px-2 py-3 bg-violet-100">{idData.title}</h1>
            </div>
            <div className="flex flex-row px-2">
                <div className="flex-start flex flex-row">
                    <User
                        name={idData.usr}
                        description="staff"
                        avatarProps={{
                            src: "/Yukinoshita.jpeg",
                            name: idData.usr,
                        }}
                    />
                </div>
            </div>
            <div className="px-2">
                <div className="text-white">
                    <ul>{eachTopMessageLine}</ul>
                </div>
                
                {commentsDatas}
            </div>
            <SubmitForm id={id}/>
        </div>
    )
}