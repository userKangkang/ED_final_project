import * as React from "react";
import { Link } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";

export default function HomePage() {
    return(
    <>
      <div>
      <Card className="max-w-[400px]" as={Link} href={"/courses/cs61b"}>
      <CardHeader className="flex gap-3">
        
        <div className="flex flex-col">
          <p className="text-md">工程学导论</p>
          <p className="text-small text-default-500">ME1221</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>项目式教学，通过提出问题并探索简单方案，达到让学生从被动接受知识到主动获取知识的目的。</p>
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
      </div>
    </>
    );
    
}
