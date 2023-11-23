import React from "react";
import {Image} from "@nextui-org/react";


export default function RootMode() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <Image
          width={200}
          height={200}
          alt="NextUI Fruit Image with Zoom"
          src="/SJTU.png"
        />
        <div className="text-center text-sm text-gray-500">
          打开或新建一个主题
        </div>
    </div>
    
  );
}
