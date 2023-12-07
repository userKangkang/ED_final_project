"use server"
import PersonalSet from "@/Components/personalMessage/personalSet";
import * as React from "react";
import getUser from "@/app/api/getuser";
import { auth } from "@/auth";

export default async function HomePage() {
    const {user} = await auth();
    const {email} = user;
    const userData = await getUser(email);
  return(
    <>
        <PersonalSet userData={userData}/>
    </>
  );
}

