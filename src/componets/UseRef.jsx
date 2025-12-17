import { useEffect } from "react";

export default function UseRef() {
    var num = 0
    useEffect(() => {
        let interval = setInterval(() => {
            console.log(num = num + 1)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])
}