"use server"
import {signOut} from "@/auth";

export default async function logOut() {
   await signOut();
}