"use client"
import './styles.scss'

import { EditorContent, useEditor } from '@tiptap/react'
import React, { useCallback, useRef } from 'react'
import {Card, CardHeader, CardBody, Button, Chip, Textarea} from "@nextui-org/react";
import {UploadButton} from "@/app/api/uploadthing/uploadbutton"
export default function TextBox({editor, handleSubmit, type}) {
    const imageUrl = useRef("");
    const addImage = useCallback(() => {
        console.log(imageUrl.current);
        const url = imageUrl.current;

        if (url) {
            editor.chain().focus().setImage({src: url}).run()
        }
    }, [editor, imageUrl])

    if (!editor) {
        return null
    }


    return (
        <div className={"flex justify-center mt-5"}>
            <Card className={"py-4 w-full m-3"}>
                <CardHeader className="pb-0 pt-0 px-4 flex-row justify-between">
                    <Chip color={"default"} size={"md"}>{type}</Chip>
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            // Do something with the response
                            imageUrl.current = res[0].url;
                            addImage();
                        }}
                        onUploadError={(error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
                </CardHeader>
                <CardBody className={"overflow-visible py-2 flex flex-col"}>
                        <EditorContent className={"border-2 border-gray-400 rounded-lg"} editor={editor} />
                    <Button type={"submit"} className={"mt-3"}>Submit</Button>
                </CardBody>
            </Card>
        </div>
    )
}