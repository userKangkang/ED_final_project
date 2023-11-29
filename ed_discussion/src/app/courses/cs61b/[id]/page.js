import {sql} from "@vercel/postgres";
import { placeTopMessageContent } from "./placeMessageContent";
import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {getComments} from "@/app/api/routes/subMessages";

export async function generateDynamicParams() {
    const datas = await sql`SELECT id FROM TopMessage order by date DESC;`;
    console.log(datas);
    return datas.rows.map((row) => ({
                id: row.id,
        })
    )
}

export default async function Cs61bQuestions({params}) {
    const {id} = params;
    const idData = await placeTopMessageContent(id);
    let Text = "";
    idData.content.forEach((para) => {
        Text += para.content[0].text;
     });

    const comments = await getComments(id);
    console.log(comments);
    const commentsDatas = comments.rows.map((row) => (
        <ul>
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
                {Text}
                </div>
                <Button href={"/courses/cs61b/"+id+"/newComment"} as={Link} className="text-white">评论</Button>
                {commentsDatas}
            </div>
        </div>
    )
}