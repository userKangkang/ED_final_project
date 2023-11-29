"use client"
import './styles.scss'

import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Image from '@tiptap/extension-image'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import React, { useCallback, useRef } from 'react'
import {Card, CardHeader, CardBody, Button, Chip, Textarea} from "@nextui-org/react";
import {UploadButton} from "@/app/api/uploadthing/uploadbutton"
export default function TextBox({editor, handleSubmit}) {
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
                    <Chip color={"default"} size={"md"}>Paragraph</Chip>
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            // Do something with the response
                            imageUrl.current = res[0].url;
                            console.log(res[0]);
                            addImage();
                        }}
                        onUploadError={(error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
                </CardHeader>
                <CardBody className={"overflow-visible py-2 flex flex-col"}>
                  <EditorContent editor={editor} />
                    <Button onClick={handleSubmit}>Get Content</Button>
                </CardBody>
            </Card>
        </div>
    )
}