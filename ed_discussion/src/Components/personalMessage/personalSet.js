"use client"
import React from "react";
import {Image, Avatar, Divider} from "@nextui-org/react";
import {UploadButton} from "@/app/api/uploadthing/uploadbutton"
import { useCallback, useRef } from "react";
import { modifyAvatar } from "@/app/courses/new/Actions";

export default function PersonalSet({userData, avatarUrl}) {
  const imageUrl = useRef("");
  const addImage = useCallback(() => {
    console.log(imageUrl.current);
    const url = imageUrl.current;

    if (url) {
    }
  }, [imageUrl]);
  return (
    <div className = "font-cosmic flex flex-wrap flex-col">
      <h1 className="mt-4 text-5xl px-8">简介</h1>
      <div className= "flex justify-self-start ">
        <Image src={userData.avatar} className={"rounded-full mt-6 mb-6 mr-10 ml-10"} width={200} height={200} />
        <div className = "flex flex-col ml-24 justify-center">
            <div className="text-2xl font-mono" >{userData.username}</div>
            <div className="text-lg font-mono" >{userData.email}</div>
        </div>
      </div>
      <div className = "flex flex-col">
        <h1 className = "flex-none w-63 h-14 font-mono text-3xl px-8">电子邮件地址</h1>
        <p className = "px-8 py-4">Ed只会向你的主邮件发送电子邮件</p>
        <div className = "rounded-md border-solid border-sky-500 ">
          <span className = "px-8 py-4">{userData.email}</span>
          <span className = "px-8 py-4 rounded-md border-solid border-rose-500 ">主电子邮件</span>
        </div>
        <div className={"ml-20 max-w-[150px]"}>
          <div className = "max-w-full px-8 py-4 flex flex-col justify-center items-center">
              <div>更新头像</div>
              <div>
              <UploadButton
                type={"submit"}
                endpoint="imageUploader"                    
                onClientUploadComplete={(res) => {
                // Do something with the response
                imageUrl.current = res[0].url;
                console.log(res[0]);
                addImage();
                modifyAvatar(imageUrl.current, userData.email);
              }}
                onUploadError={(error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
              }}
              />
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}