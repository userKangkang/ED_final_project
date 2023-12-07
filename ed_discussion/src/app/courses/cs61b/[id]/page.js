import { placeTopMessageContent } from "./placeMessageContent";
import {Image, User, Card, CardBody, CardHeader} from "@nextui-org/react";
import {getComments} from "@/app/api/routes/subMessages";
import {getTopDataIds} from "@/app/api/routes/topMessage";
import SubmitForm from "@/app/courses/cs61b/[id]/submitForm";
import { auth } from "@/auth"
import getUser from "@/app/api/getuser";
import { getAllUser } from "@/app/api/getuser";

export async function generateDynamicParams() {
    const datas = await getTopDataIds();
    return datas.map((row) => ({
                id: row.id,
        })
    )
}

export async function getCommentData(rows)
{
    const allUsr = await getAllUser();
    const UsrAvaMap = allUsr.map((usr) => (
        {email: usr.email, avatar: usr.avatar}
    ));
    const getAvatar = UsrAvaMap.reduce((map, obj) => {
        map[obj.email] = obj.avatar;
        return map;
    }, {});
    return(
        <>
        {rows.map((row) => {  
        return(
        <ul key={row.id} className={"m-2"}>
            <li>
                <User
                key={row.id}
                name={row.usr}
                description={"staff"}
                avatarProps={{
                    src: getAvatar[row.email],
                    name: row.usr,
                }}
            />
            </li>
            <li>{row.detailedtime.toLocaleString()}</li>
            <li><p className={"break-words"}>{row.context}</p></li>
        </ul>)
        })}
        </>
    )
    
}

export default async function Cs61bQuestions({params}) {
    const {user} = await auth();
    const {email} = user;
    
    const userData = await getUser(email);
    const {id} = params;
    const idData = await placeTopMessageContent(id);
    
    const allUsr = await getAllUser();
    const UsrAvaMap = allUsr.map((usr) => (
        {email: usr.email, avatar: usr.avatar}
    ));
    const getAvatar = UsrAvaMap.reduce((map, obj) => {
        map[obj.email] = obj.avatar;
        return map;
    }, {});

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
    


    const commentsDatas = await getCommentData(comments.rows);



    return (
<<<<<<< HEAD
        <div className={"w-full p-2"}>
            <div className="ml-8 flex flex-col text-4xl text-amber-400 font-serif">
=======
        <div className={"w-full relative"}>
            <div className="ml-8 flex flex-col text-4xl text-amber-400">
>>>>>>> main
                <h1 className="px-2 py-3">{idData.title}</h1>
            </div>
            <Card>
                <CardHeader className="flex flex-row justify-between">
                        <User
                            name={idData.usr}
                            description="staff"
                            avatarProps={{
                                src: getAvatar[idData.email],
                                name: idData.usr,
                            }}
                        />
                        <p className="px-2 py-3">{idData.posttime.toLocaleString()}</p>
                </CardHeader>
                <CardBody>
                    <div className="dark:text-white ">
                        <ul>{eachTopMessageLine}</ul>
                    </div>
                </CardBody>
            </Card>
                <div className="px-2 ">
                    {commentsDatas}
                </div>
                <div className="fixed bottom-20 left-100 right-0">
                    <SubmitForm id={id}/>
                </div>
        </div>
    )
}