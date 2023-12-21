"use client"
import { Textarea } from "@nextui-org/react";
import { postComment } from "@/app/courses/new/Actions";
import { Button } from "@nextui-org/react";
import { useState, useRef } from "react";


export default function SubmitForm(props) {
    const [content, setContent] = useState("");

    const texteareRef = useRef(null);
    return(
        <form className="px-8" onSubmit={(e) => {
            e.preventDefault();
            if(!(texteareRef.current.value === "")) {
                postComment(props.id, texteareRef.current.value);
            }
            setContent("");
            texteareRef.current.value = "";
        }}>
            <Textarea ref={texteareRef}
               label="Description" variant={"bordered"}
               placeholder="Enter your description"
               className="py-4 w-full"
               id="comment-textarea" wrap={"hard"}
               value={content}
               onChange={(e) => setContent(e.target.value)}
           />
           <div className="flex flex-row-reverse">
                <Button type={"submit"} >发表评论</Button>
              </div>
        </form>
    );
}