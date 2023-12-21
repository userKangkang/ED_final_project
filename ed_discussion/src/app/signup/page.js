"use client"
import {Button, Input} from "@nextui-org/react";
import {onSignUp} from "@/app/signup/submit";
import {useState} from "react";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassWord] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-gradient-to-r from-blue-300 via-white-500">
            <form action={() => {onSignUp(email, password, confirmPassword, username);}} className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
                <div className="mb-2">
                    <Input
                        label="email"
                        placeholder="Enter your email"
                        defaultValue=""
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <Input
                        label="Username"
                        placeholder="Enter your username"
                        defaultValue=""
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <Input
                        label="password"
                        placeholder="Enter your password"
                        defaultValue=""
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <Input
                        label="confirmPassword"
                        placeholder="Confirm your password"
                        defaultValue=""
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                {password === confirmPassword ?
                    <p className={"text-green-500"}> Password and confirm password are the same!</p> :
                    <p className="text-red-500">Password and confirm password are not the same</p>}
                </div>
                <div className="flex items-center justify-between">
                    <Button type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
    );
}

