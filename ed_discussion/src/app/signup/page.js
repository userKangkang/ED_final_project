"use client"
import {Button, Input} from "@nextui-org/react";
import { useState } from "react";
import {onSignUp} from "@/app/signup/submit";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassowrd] = useState("");
    const [username, setUsername] = useState("");

    return (
        <div>
            <form action={() => {
                onSignUp(email, password, confirmPassword, username);
            }}>
                <Input type="email" label="Email" placeholder="Enter your email" onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <Input type="text" label="Username" placeholder="Enter your username" onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
                <Input type="password" label="Password" placeholder="Enter your password" onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <Input type="password" label="ConfirmPassword" placeholder="Confirm your password" onChange={(e) => {
                    setConfirmPassowrd(e.target.value);
                }}/>
                { password === confirmPassword ? <p className="text-green-500">The passwords are the same!</p> : <p className="text-red-500">The passwords are not the same!</p> }
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}