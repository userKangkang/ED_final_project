import React from "react";
import {Input} from "@nextui-org/react";

export default function TitleBar({setTitle}) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap m-1">
      <Input type="title" label="标题" onChange={(event => {
          setTitle(event.target.value)
      })}/>
    </div>
  );
}