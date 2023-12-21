import * as React from "react";
import {Switch} from "@nextui-org/react";

export default function HomePage() {
  return(
    <>
    <div className="mx-10 my-20">
        <Switch defaultChecked>
            Dark Mode
        </Switch>
    </div>
    </>
  );

}