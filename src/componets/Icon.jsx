import { useEffect, useState } from "react";


export default function Icon(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log({count})
  },[count])

  return(
    <>
    <button onClick={()=>setCount(prev => prev+1)}>click me</button>
    <h1>count: {count <10 ? `0${count}` : `${count}`}</h1>
    <p>{count%2==0?`even`:`odd`}</p>
    </>
  )
}









