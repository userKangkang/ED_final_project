import {Button} from "@nextui-org/react";

export default function NewButton() {
    return (
        <>
          <Button className={"self-center w-5/6 mx-2 mb-1 bg-blue-600 px-7 py-2 rounded-lg mt-5"}>
            <span className={"text-white"}>新建主题</span>
          </Button>
        </>
    );
}