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


export default function NewThemePage({params}) {
    const [questionType, setQuestionType] = useState("General");
    const [title, setTitle] = useState("");
    const editor = useEditor({
        extensions: [Document, Paragraph, Text, Image, Dropcursor],
        autofocus: true,
        editable: true,
        injectCSS: false,
    });

    function handleSubmit() {
        // console.log(editor.getJSON().content);
    }
    return (
        <>
      <main className={"flex max-h-screen flex-row items-start p-0 min-w-screen bg-gradient-to-r from-[#0D001A] to-[#180828]"}>

        <div className={"w-11/12 border-solid border-gray-400 min-h-screen"}>
           <form action={() => {
               postQuestion(title, questionType, JSON.stringify(editor.getJSON().content));
           }}>
               <div className="w-full h-full flex flex-col items-center justify-center">
                   <Navbar>
                       <NavbarContent justify="start" self="center">
                           <NavbarItem >
                               <Link hre="/">取消</Link>
                           </NavbarItem>
                       </NavbarContent>
                       <NavbarContent justify="center" self="center">
                           <NavbarItem >
                               <div>新问题</div>
                           </NavbarItem>
                       </NavbarContent>
                       <NavbarContent justify="end" self="center">
                           <NavbarItem>
                               <Button type={"submit"}>发帖</Button>
                           </NavbarItem>
                       </NavbarContent>
                   </Navbar>
                   <div className="w-full h-full flex flex-col items-center justify-center px-3">
                       <TitleBar setTitle={setTitle}/>
                       <ButtonBar/>
                       <SwitchType questionType={setQuestionType}/>
                   </div>
               </div>
               <TextBox editor={editor} handleSubmit={handleSubmit}/>
           </form>
        </div>
      </main>
    </>
    );
}