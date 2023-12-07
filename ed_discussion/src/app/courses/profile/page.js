"use server"
import PersonalSet from "@/Components/personalMessage/personalSet";
import * as React from "react";
import getUser from "@/app/api/getuser";
import { auth } from "@/auth";
import { sql } from "@vercel/postgres";

let avatarUrl = [""];

export default async function HomePage() {
    const {user} = await auth();
    const {email} = user;
    const userData = await getUser(email);

    const modifyAvatar = (avatar) => {
      avatarUrl[0] = avatar;
    }
    
    if(avatarUrl[0] !== "") {
      sql`UPDATE usrs SET avatar = ${avatarUrl[0]} WHERE email = ${email}`;
      avatarUrl[0] = "";
    }
  return(
    <>
        <PersonalSet userData={userData} avatarUrl={avatarUrl}/>
    </>
  );
}

