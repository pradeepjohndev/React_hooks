import { useEffect, useState } from "react";

export default function Task1() {
    let [onlineDevices, setCount] = useState(5);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(prev=>{
                if(prev>=10){
                    clearInterval(interval);
                    console.log("limit")
                    return prev
                }
                return prev+1
            });
        }, 2000);

        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <h1>onlineDevices: {onlineDevices}</h1>
        </>
    )
}