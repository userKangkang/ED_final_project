"use server"
import PersonalSet from "@/Components/personalMessage/personalSet";
import * as React from "react";
import getUser from "@/app/api/getuser";

export default function HomePage() {
  return(
    <>
        <PersonalSet/>
    </>
  );
}

