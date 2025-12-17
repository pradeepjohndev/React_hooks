import { useState } from "react"
import ComponentB from "./ComponentB"
import Content from "./Content"

export default function ComponentA() {

    const [user] = useState("pradeep")
    return (
        <>
            <div className="box">
                <h1>ComponentA</h1>
                <p>{`hello ${user}`}</p>
                <Content.Provider value={user}>
                    <ComponentB />
                </Content.Provider>
            </div>
        </>
    )
}