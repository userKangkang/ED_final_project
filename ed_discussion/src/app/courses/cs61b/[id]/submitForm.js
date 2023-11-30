"use client"
import { Textarea } from "@nextui-org/react";
import { postComment } from "@/app/courses/new/Actions";
import { Button } from "@nextui-org/react";
import { useRef } from "react";


export default function SubmitForm(props) {
    const texteareRef = useRef();
    return(
        <form className="px-8" action={() => {
            if(texteareRef.current.value === "") {
                return;
            }
            postComment(props.id, texteareRef.current.value);
        }}>
            <Textarea ref={texteareRef}
               label="Description"
               placeholder="Enter your description"
               className="py-4 w-full"
               id="comment-textarea"
           />
           <div className="flex flex-row-reverse">
                <Button type={"submit"} >发表评论</Button>
              </div>
        </form>
    );
}