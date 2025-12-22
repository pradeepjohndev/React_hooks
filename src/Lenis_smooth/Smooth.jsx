import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function Smooth(){

    useEffect(()=>{
        const lenis = new Lenis({
            smooth: true,
            duration: 1.2,
            easing: (t) => t * (2-t),
        })

        function raf(time){
            lenis.raf(time);
            requestAnimationFrame(raf);
            console.log("hi")
        }

        requestAnimationFrame(raf);

        return()=>{
            lenis.destroy()
        }
    },[])


    return(
        <>
        <section className="h-screen bg-green-100 w-screen text-center">
            section - 1
        </section>
        <section className="h-screen bg-green-200 w-screen text-center">
            section - 2
        </section>
        <section className="h-screen bg-green-300 w-screen text-center">
            section - 3
        </section>
        </>
    )
}