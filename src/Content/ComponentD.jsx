import { useContext } from "react"
import Content from "./Content"

export default function ComponentD() {
    const username = useContext(Content)
    return (
        <>
            <div className="box">
                <h1>ComponentD</h1>
                <p>{`bye ${username}`}</p>
            </div>
        </>
    )
}