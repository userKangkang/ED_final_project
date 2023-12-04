import {Button, Input} from "@nextui-org/react";

export default function SignUpPage() {
    return (
        <div>
            <form>
                <Input type="email" label="Email" placeholder="Enter your email" />
                <Input type="password" label="Password" placeholder="Enter your password" />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}