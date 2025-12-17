export default function Childinc({setCount}){
    return(
        <button onClick={()=>setCount(prev=>prev+1)}>click me</button>
    )
}