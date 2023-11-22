"use client"
import './styles.scss'

import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Image from '@tiptap/extension-image'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import React, { useCallback } from 'react'
import {Card, CardHeader, CardBody, Button, Chip, Textarea} from "@nextui-org/react";
export default function TextBox() {
    const editor = useEditor({
        extensions: [Document, Paragraph, Text, Image, Dropcursor],
        autofocus: true,
        editable: true,
        injectCSS: false,
    });

    const addImage = useCallback(() => {
        const url = window.prompt('URL')

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
                    <Button isIconOnly={true} size={"sm"} color={"secondary"} onClick={addImage}>
                        <img
                            src={"/image.svg"}
                            alt={"add image"}
                        />
                    </Button>
                </CardHeader>
                <CardBody className={"overflow-visible py-2"}>
                  <EditorContent editor={editor} />
                </CardBody>
            </Card>
        </div>
    )
}