import { useState } from "react";
import Child from "./Child";

export default function Parentprops(){
    const[onlineDevices,setStatus]=useState(10)

    return(
        <>
        <h1>parent componets</h1>
            <Child onlineDevices={setStatus(onlineDevices)}/>
        </>
    )
}

