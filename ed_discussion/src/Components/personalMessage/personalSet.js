import React from "react";
import {Image, Avatar} from "@nextui-org/react";

export default function PersonalSet() {
  return (
    <div className = "flex flex-wrap flex-col">
      <h1 className="mt-4 text-5xl px-8">简介</h1>
      <div className= "flex justify-self-start ">
        <Image src="/Yukinoshita.jpeg" className={"rounded-full mt-6 mb-6 mr-10 ml-10"} width={200} height={200} />
        <div className = "flex flex-col ml-24 justify-center">
            <div className="text-2xl font-mono" >Jingfeng Sun</div>
            <div className="text-lg font-mono" >123456789@gmail.com</div>
        </div>
      </div>
      <div className = "flex flex-col">
        <h1 className = "flex-none w-63 h-14 font-mono text-3xl px-8">电子邮件地址</h1>
        <p className = "font-mono px-8 py-4">Ed只会向你的主邮件发送电子邮件</p>
        <div className = "rounded-md border-solid border-sky-500 ">
          <span className = " font-mono px-8 py-4">123456789@gmail.com</span>
          <span className = " font-mono px-8 py-4 rounded-md border-solid border-rose-500 ">主电子邮件</span>
        </div>
        <div>
          <div className = " font-mono px-8 py-4">添加电子邮件地址</div>
        </div>
      </div>
    </div>
  );
}