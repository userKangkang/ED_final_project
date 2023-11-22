"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image, Button, Chip, Textarea} from "@nextui-org/react";
export default function TextBox() {
    return (
        <div className={"flex justify-center mt-5"}>
            <Card className={"py-4 w-full m-3"}>
                <CardHeader className="pb-0 pt-0 px-4 flex-row justify-between">
                    <Chip color={"default"}>Paragraph</Chip>
                    <Button isIconOnly={true} size={"sm"} color={"secondary"}>
                        <Image
                            src={"/image.svg"}
                            alt={"add image"}
                        />
                    </Button>
                </CardHeader>
                <CardBody className={"overflow-visible py-2"}>
                    <Textarea
                        variant={"bordered"}
                        minRows={10}
                        maxRows={18}
                        />
                </CardBody>
            </Card>
        </div>
    )
}