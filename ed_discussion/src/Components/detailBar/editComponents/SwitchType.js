import React from "react";
import { Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function SwitchType({questionType}) {
  return (
    <div className="flex flex-row w-full">
        <div className="flex items-center text-xm w-1/12 p-2">类别</div>
        <div className="flex flex-row flex-wrap justify-around w-11/12 items-center">
        <Button variant="light" className="h-8 w-26 p-0" onClick={() => {questionType("General")}}>
            <Chip variant="bordered" color="primary" className="w-full">General</Chip>
        </Button>
        <Button variant="light" className="h-8 w-26 p-0" onClick={() => {questionType("Lectures")}}>
            <Chip variant="bordered" color="secondary">Lectures</Chip>
        </Button>
        <Button variant="light" className="h-8 w-26 p-0" onClick={() => {questionType("Vitamins")}}>
            <Chip variant="bordered" color="success">Vitamins</Chip>
        </Button>
        <Button variant="light" className="h-8 w-26 p-0" onClick={() => {questionType("Projects")}}>
            <Chip variant="bordered" color="warning">Projects</Chip>
        </Button>
        <Button variant="light" className="h-8 w-26 p-0" onClick={() => {questionType("Social")}}>
            <Chip variant="bordered" color="danger">Social</Chip>
        </Button>
        </div>
        
    </div>
  );
}