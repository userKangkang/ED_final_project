"use client"
import TopMessages from "@/Components/homeComponents/topMessage";
import { useSearchParams } from "next/navigation";


export default function NewMiddleLinks(props) {
    const searchParams = useSearchParams();
    return(
        <TopMessages datas={props.datas} searchParams={searchParams}/>
    );
}