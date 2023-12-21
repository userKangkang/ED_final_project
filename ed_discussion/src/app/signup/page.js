import { Button, Input, Textarea } from "@nextui-org/react";

export default function SignUpPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-gradient-to-r from-blue-300 via-white-500">
      <form className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <div className="mb-2">
          <Textarea
            label="email"
            variant="bordered"
            placeholder="Enter your email"
            defaultValue=""
          />
        </div>
        <div className="mb-2">
          <Textarea
            label="password"
            variant="bordered"
            placeholder="Enter your password"
            defaultValue=""
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

