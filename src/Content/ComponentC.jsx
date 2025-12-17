import { useContext } from "react"
import ComponentD from "./ComponentD"
import Content from "./Content"

export default function ComponentC() {

    const name = useContext(Content)
    return (
        <>
            <div className="box">
                <h1>ComponentC</h1>
                <p>{`${name}`}</p>
                <ComponentD />
            </div>
        </>
    )
}