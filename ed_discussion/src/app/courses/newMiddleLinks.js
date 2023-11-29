"use client"
import TopMessages from "@/Components/homeComponents/topMessage";
import { useSearchParams } from "next/navigation";


export default function NewMiddleLinks(props) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    console.log("!!!!!!!!!" + searchParams);
    return(
        <TopMessages datas={props.datas} searchParams={searchParams}/>
    );
}