import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Mycol() {
    const [open, setOpen] = useState(false);
    const [expand, setExpand] = useState(false);

    return (
        <>
            <div style={{ cursor: "pointer", width: "300px", border: "1px solid white" }}>
                <div onClick={() => setOpen(!open)}>fruites{open}</div>

                <Collapse isOpened={open} theme={{
                    collapse: "react-collapse",
                    content: "react-collapse-content"
                }}>
                    <div style={{ border: "1px solid white" }}>

                        <li>hello</li>
                        <li>happy</li>
                        <div onClick={() => { setExpand(!expand) }}>open for surpise
                        <Collapse isOpened={expand} theme={{
                            collapse: "react-collapse",
                            content: "react-collapse-content"
                        }}><li>you</li></Collapse>
                        </div>
                    </div>
                </Collapse>
            </div>
            <h2>hello</h2>
            <li><a href="">Home</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">service</a></li>
        </>
    )
}