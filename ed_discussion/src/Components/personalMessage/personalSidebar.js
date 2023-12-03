"use client";
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import Image from "next/image";
import { Link } from "@nextui-org/react";

export default function PersonalSideBar() {
  const items = [
    {
      key: "人图像",
      label: "账户",
      url:"/bx-user.svg",
    },
    // {
    //   key: "bell",
    //   label: "通知",
    //   url: "/bell.svg"
    // },
    { key: "画板",
      label: "外观",
      url: "/bx-palette.svg"
    },
    // {
    //   key: "global",
    //   label: "语言和地区",
    //   url: "/bx-world.svg"
    // },
    // {
    //   key: "合并账户",
    //   label: "合并账户",
    //   url: "/bx-transfer-alt.svg"
    // },
    // {
    //  key: "heart",
    //  label: "告诉朋友",
    //  url: "heart.svg"
    // },
    // {
    //   key: "hat",
    //   label: "我的课程",
    //   url: "/hat.svg"
    // },
    // {
    //  key: "聊天框",
    //  label: "我的论坛",
    //  url: "/bx-chat.svg"
    // }
  ];
    const listBoxItems = items.map((item) => (
            <ListboxItem
                as={Link}
                href={item.key === "人图像" ? "/profile" : item.key === "heart" ? "/profile/share" : "/profile/appearance"}
                key={item.key}
                color={"default"}
                className={"light:text-white dark:text-white"}
            >
                <Image src={item.url} alt={"icon"} width={20} height={20}/>
                {item.label}
            </ListboxItem>
    )
    );
  return (
    <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      <Listbox
        items={items}
        aria-label="Dynamic Actions"
      >
            {listBoxItems}
      </Listbox>
    </div>
      
  );
}