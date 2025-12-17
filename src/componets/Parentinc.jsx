import { useState } from "react";
import Childinc from "./Childinc";

export default function Parentinc(){
    const [count,setCount] = useState(0)

    return(
        <>
        <h1>counter:{count}</h1>
        <Childinc setCount={setCount}/>
        </>
    )
}