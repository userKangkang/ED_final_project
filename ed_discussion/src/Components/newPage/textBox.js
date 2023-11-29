"use client"
import './styles.scss'
import "@uploadthing/react/styles.css";

import { EditorContent, useEditor } from '@tiptap/react'
import React, { useState, useCallback } from 'react'
import {Card, CardHeader, CardBody, Button, Chip, Textarea} from "@nextui-org/react";
import { UploadButton } from "../homeComponents/Uploadthing";
import Image from "next/image";
export default function TextBox({editor, handleSubmit}) {
    const [imageUrl, setImageUrl] = useState("");
    const addImage = useCallback((imageUrl) => {
        const url = imageUrl;

        if (url) {
            editor.chain().focus().setImage({src: url}).run()
        }
    }, [editor])

    if (!editor) {
        return null
    }


    return (
        <div className={"flex justify-center mt-5"}>
            <Card className={"py-4 w-full m-3"}>
                <CardHeader className="pb-0 pt-0 px-4 flex-row justify-between">
                    <Chip color={"default"}>Paragraph</Chip>

                    <Button isIconOnly={true} size={"sm"} color={"secondary"} onClick={() => {
                        addImage("/SJTU.png");
                    }}>
                        <img
                            src={"/image.svg"}
                            alt={"add image"}
                        />
                    </Button>
                </CardHeader>
                <CardBody className={"overflow-visible py-2 flex flex-col"}>
                  <EditorContent editor={editor} />
                    <Button onClick={handleSubmit}>Get Content</Button>
                </CardBody>
            </Card>
        </div>
    )
}