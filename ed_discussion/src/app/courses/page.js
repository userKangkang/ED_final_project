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
          <p className="text-md">CS61B</p>
          <p className="text-small text-default-500">Data Structures</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Introducting fundamental data structures and algorithms.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
      </div>
    </>
    );
    
}
