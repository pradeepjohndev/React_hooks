import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Lenis_scroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current.destroy();
    }
  }, [])

  /* useEffect(()=>{
    const lenis = new Lenis({
      duration: 1.2,
      smooth: True,
    });


    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf)

    return()=>{
      lenis.destroy();
    };
  },[]) */

  return (
    <>
      <section className="h-screen bg-red-300 w-screen text-center">
        <h1>Page 1</h1>
        <button onClick={() => lenisRef.current.scrollTo("#btn2")}>
          click me
        </button>
      </section>

      <section id="btn2" className="h-screen bg-red-400 w-screen">
        <h1>Page 2</h1>
        <button onClick={() => lenisRef.current.scrollTo("#btn3")}>
          click me
        </button>
      </section>

      <section id="btn3" className="h-screen bg-red-500 w-screen">
        <h1>Page 3</h1>
        <button onClick={() => lenisRef.current.scrollTo("#btn4")}>
          click me
        </button>
      </section>

      <section id="btn4" className="h-screen bg-red-600 w-screen">
        <h1>Page 4</h1>
        <button onClick={() => lenisRef.current.scrollTo(0)}>
          Back to top
        </button>
      </section>
    </>
  );
}
