import React from "react";
import {Image} from "@nextui-org/react";


export default function RootMode() {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <Image
          width={240}
          height={240}
          alt="NextUI Fruit Image with Zoom"
          src="../../../public/SJTU.png"
        />
    </div>
    
  );
}
