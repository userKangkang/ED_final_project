import React from "react";
import {Image} from "@nextui-org/react";

export default function PersonalSet() {
  return (
    <div chass = "flex flex-row">
      <h1 className="text-5xl px-8">简介</h1>
      <div class = "flex items-center">
        <Image src="/bell.svg" width={200} height={200} />
        <div class = "flex flex-col">
            <div className="text-2xl font-mono" >Jingfeng Sun</div>
            <div className="text-lg font-mono" >123456789@gmail.com</div>
        </div>
      </div>
      <div class = "flex flex-col">
        <h1 class = "flex-none w-63 h-14 font-mono text-3xl px-8">电子邮件地址</h1>
        <p class = "font-mono px-8 py-4">Ed只会向你的主邮件发送电子邮件</p>
        <div class = "rounded-md border-solid border-sky-500 ">
          <span class = " font-mono px-8 py-4">123456789@gmail.com</span>
          <span class = " font-mono px-8 py-4 rounded-md border-solid border-rose-500 ">主电子邮件</span>
        </div>
        <div>
          <div class = " font-mono px-8 py-4">添加电子邮件地址</div>
        </div>
      </div>
    </div>
  );
}