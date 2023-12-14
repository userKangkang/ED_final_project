"use server"
import {getTopDataLinks} from "@/app/api/routes/topMessage";
import {topData} from "@/app/courses/layout";
import NewMiddleLinks from "@/app/courses/newMiddleLinks";

export default async function MiddleLinks(props) {
    const topData = await getTopDataLinks();
    const DATA1 = topData.map((row) => ({
        id: row.tid,
        title: row.title,
        isQuestion: row.isquestion,
        type: row.type,
        color: "red-500",
        author: row.usr,
        date: new Date(row.posttime).toLocaleTimeString(),
    }));
    return <NewMiddleLinks datas={DATA1} isquestion={props.isquestion}/>
}