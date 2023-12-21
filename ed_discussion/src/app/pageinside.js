"use client"
import React from "react";
import {Link} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import SelectToLearn from "@/app/Introduction";
import Hat from "@/Components/homeComponents/Hat";
import {EnterHeader} from "@/app/header";
import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import { useState } from 'react';
import {ButtonGroup} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

// eslint-disable-next-line @next/next/no-async-client-component
export default function HomePage() {
  const [selectedNav, setSelectedNav] = useState("");
    return (
        <main className={" light flex flex-col dark:from-[#0D001A] dark:to-[#180828] light:from-[#E4E4E7] light:to-[#FFEDFA]"}
            >
        <div>
          <nav className="flex justify-center border-2">
          <p className="text-3xl flex ">AHAT</p>
          {/* <img className="flex w-30 h-30 rounded-full object-contain" style={{ maxWidth: '100%', maxHeight: '100%' }} src="/hat.svg" alt="ahat"/>  */}
          <Hat/>
          <ul>
            <ButtonGroup color="#3f3f46">
            <Button onClick={() => {
              setSelectedNav("section1");
              document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
            }}>Function</Button>
            <Button onClick={() => {
              setSelectedNav("section2");
              document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
            }}>Advantages</Button>
            <Button onClick={() => {
              setSelectedNav("section3");
              document.getElementById("section3").scrollIntoView({ behavior: "smooth" });
            }}>Suggestions</Button>
            </ButtonGroup>
          </ul>
          </nav>
      </div>
      <div>
            <div className="flex flex-col mx-auto mt-4 mb-4 ">
                <div className="flex flex-col justify-center mx-auto border-solid ">
                    <div className="mt-10">
                        <p className="flex flex-row px-50 justify-center font-semibold text-5xl">Join us!</p>
                    </div>
                    <div className="flex justify-center gap-40 items-center py-8 ml-8 mr-8">
                        <Button color="success"><Link href={"login"} className="text-gray-50 w-full ">Login</Link></Button>
                        <Button color="primary"><Link href={"signup"}className="text-gray-50">Register</Link></Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <Divider className="my-300"></Divider>
            </div>

            <div className="py-8 flex flex-col justify-center" id="section1">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-between mb-10">
                <p className="text-7xl flex flex-col justify-center px-10 ">Function</p>
                <div className="flex flex-col  rounded-md w-[50%] mr-10 max-w-70">
                  <div className="px-8 py-6 border-2 border-indigo-100 rounded-md ">
                    <p className="py-2 text-3xl ">Each lesson is independent;</p>
                <p className="py-2 text-3xl ">All of the messages are divided into five parts:General, Lectures, Vitamins, Projects and Social;</p>
                <p className="py-2 text-3xl ">You can get into kinds and check the information or create a new theme by your self.Discuss and comment in each theme.</p>
                  </div>
                </div>

              </div>
                <div className="max-w-full">
                  <SelectToLearn className="flex flex-col justigfy-center h-300"/>
                </div>

              </div>
            </div>

            <div className="flex flex-row">
                <Divider className="my-300"></Divider>
            </div>
            <div className="py-8 flex flex-col justify-center " id="section2">
              <div className="flex flex-col">
                <div>
                  <div className="flex flex-row justify-between">
                    <p className="text-7xl flex flex-col justify-center px-10 ">Advantages</p>
                    <div className="flex flex-col  rounded-md w-[50%] mr-10 max-w-70 border-2 border-indigo-100">
                      <div className="px-8 py-6 ">
                          <p className="py-2 text-3xl ">Clearer for you to find imformation about each classes;</p>
                          <p className="py-2 text-3xl ">Easier to discuss questions;</p>
                          <p className="py-2 text-3xl ">More convenient to contact;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
                <Divider className="my-300"></Divider>
            </div>
            <div className="py-8 flex flex-col justify-center " id="section3">
              <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <p className="text-7xl flex flex-col justify-center px-10">Suggestions</p>
                    <div className="lex flex-col rounded-md w-[50%] mr-10 max-w-70 border-2 border-indigo-100">
                      <div className="px-8 py-6 ">
                          <p className="py-2 text-3xl">If meet problems when using AHAT, do not hesitate to contact us;</p>
                          <p className="py-2 text-3xl">We are always here to give you better user experience;</p>
                          <p className="py-2 text-2xl">Our wechat: Zn13137852909</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
                <Divider className="my-300"></Divider>
            </div>
            <div className="flex flex-row justify-center">
              ©AHAT
            </div>
        </main>
    );
}

