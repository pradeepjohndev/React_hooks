import { useState } from "react";

export default function Memo() {
  const [dark, setDark] = useState(false);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
    marginTop: "20px"
  };

  return (
    <>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <div style={themeStyles}>
        Theme: {dark ? "Dark" : "Light"}
      </div>
    </>
  );
}
