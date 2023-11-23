import React from "react";
import {Image} from "@nextui-org/react";

export default function PersonalSet() {
  return (
    <div>
      <h1>简介</h1>
      <div>
        <Image src="/hat.svg" width={200} height={200} />
        <div>
            <div>Jingfeng Sun</div>
            <div>123456789@gmail.com</div>
        </div>
      </div>
      <h1>电子邮件地址</h1>
      <p>Ed只会向你的主邮件发送电子邮件</p>
      {/* 请补充 */}
      <div>
        <span>123456789@gmail.com</span>
        <span>主电子邮件</span>
      </div>
      <div>
        <div>添加电子邮件地址</div>
      </div>
    </div>
  );
}