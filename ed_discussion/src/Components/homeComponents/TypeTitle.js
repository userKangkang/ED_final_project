import React from "react";

export default function TypeTitle({color, name}) {
    return (
        <div className={"flex flex-row align-middle"}>
            <div className={`w-3 h-3 ${color} mr-2`}></div>
            <p>{name}</p>
        </div>
    );
}

