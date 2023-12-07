import {sql} from "@vercel/postgres";
import { placeTopMessageContent } from "./placeMessageContent";
import {Image, User} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {getComments} from "@/app/api/routes/subMessages";
import {getTopDataIds} from "@/app/api/routes/topMessage";
import SubmitForm from "@/app/courses/cs61b/[id]/submitForm";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";

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
        <Card className="max-w-[600px] bg-gray-600 mb-4">
            <CardHeader className="flex gap-3">
                <div>
                    <Image
                        height={40}
                        round-full
                        src="/Yukinoshita.jpeg"
                        width={40}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-md">name</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{row.detailedtime.toLocaleString()}</p>
                <p>{row.context}</p>
            </CardBody>
        </Card>
    ));
    


    return (
        <div className={"w-full"}>
            <div className="flex flex-col text-Blue-800 font-serif text-2xl" >
                <h1 className="px-2 py-3 bg-gradient-to-r from-violet-400 to-bg-purple-600 opacity-2000">{idData.title}</h1>
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
                <div className="text-White ">
                    <ul>{eachTopMessageLine}</ul>
                </div>
                {commentsDatas}
            </div>
            <SubmitForm id={id}/>
        </div>
    )
}