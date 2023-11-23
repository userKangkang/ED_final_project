import {Button} from "@nextui-org/react";
import Edit from "./NextuiIcons/edit";
import { Link } from "@nextui-org/react";

export default function NewButton() {
    return (
        <>
        <Link href="/newTheme" className={"w-5/6 self-center"}>
          <Button className={"w-full h-full self-center mx-2 mb-1 bg-blue-600 px-7 py-2 rounded-lg mt-5"}>
            <Edit/>
            <span className={"text-white"}>新建主题</span>
          </Button>
        </Link>
        </>
    );
}