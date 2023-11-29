"use client"
import { Textarea } from "@nextui-org/react";
import { postComment } from "@/app/courses/new/Actions";
import { Button } from "@nextui-org/react";
import { useRef } from "react";


export default function SubmitForm(props) {
    const texteareRef = useRef();
    return(
        <form action={() => {
            postComment(props.id, texteareRef.current.value);
        }}>
            <Textarea ref={texteareRef}
               label="Description"
               placeholder="Enter your description"
               className="w-full"
               id="comment-textarea"
           />
           <Button type={"submit"}>发表评论</Button>
        </form>
    );
}