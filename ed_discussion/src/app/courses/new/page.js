"use client"
import TextBox from "@/Components/newPage/textBox";
import postQuestion from "@/app/courses/new/Actions";
import {Button, Input, Link, Navbar, NavbarContent, NavbarItem} from "@nextui-org/react";
import React from "react";
import {useState} from "react";
import ButtonBar from "@/Components/detailBar/editComponents/ButtonBar";
import TitleBar from "@/Components/detailBar/editComponents/TitleBar";
import SwitchType from "@/Components/detailBar/editComponents/SwitchType";
import {useEditor} from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import NewProblem from "@/Components/detailBar/editComponents/NewProblem";


export default function NewThemePage({params}) {
    const [questionType, setQuestionType] = useState("General");
    const [title, setTitle] = useState("");
    const editor = useEditor({
        extensions: [Document, Paragraph, Text, Image, Dropcursor],
        editorProps: {
            attributes: {
                class: "w-full h-72 overflow-y-scroll border-solid border-gray-300 rounded-lg prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
            },
        },
        autofocus: true,
        editable: true,
        injectCSS: false,
    });

    function handleSubmit() {
        // console.log(editor.getJSON().content);
    }
    return (
        <>
        <div className={"w-11/12 border-solid border-gray-400 min-h-screen bg-gray-400"}>
           <form action={() => {
               postQuestion(title, questionType, JSON.stringify(editor.getJSON().content));
           }}>
               <div className="w-full h-full flex flex-col items-center justify-center">
                   <NewProblem />
                   <div className="w-full h-full flex flex-col items-center justify-center px-3">
                       <TitleBar setTitle={setTitle}/>
                       <ButtonBar/>
                       <SwitchType questionType={setQuestionType}/>
                   </div>
               </div>
               <TextBox editor={editor} handleSubmit={handleSubmit}/>
           </form>
        </div>
    </>
    );
}