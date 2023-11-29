"use server"
import {getTopDataLinks} from "@/app/api/routes/topMessage";
import {topData} from "@/app/courses/layout";
import TopMessages from "@/Components/homeComponents/topMessage";

export default async function MiddleLinks() {
    const topData = await getTopDataLinks();
    const DATA1 = topData.map((row) => ({
        id: row.id,
        title: row.title,
        isQuestion: true,
        type: row.type,
        color: "red-500",
        author: row.usr,
        date: new Date(row.date).toLocaleDateString(),
    }))
    return <TopMessages datas={DATA1}/>
}