import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Fruit() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: "300px", margin: "20px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{cursor: "pointer",fontWeight: "bold", padding: "10px", border: "1px solid #ccc"}}>Fruits {open ? "▲" : "▼"}
      </div>

      <Collapse isOpened={open}>
        <div style={{padding: "10px", border: "1px solid #ccc",borderTop: "none"}}>
          <p>Apple</p>
          <p>Banana</p>
          <p>Grapes</p>
        </div>
      </Collapse>
    </div>
  );
}
