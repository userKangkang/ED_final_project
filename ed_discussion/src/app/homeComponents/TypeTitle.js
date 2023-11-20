import React from "react";

export default function TypeTitle({color, name}) {
    return (
        <div className={"flex flex-row align-middle"}>
            <div className={`w-2 h-2 ${color} mr-2`}></div>
            <p>{name}</p>
        </div>
    );
}

