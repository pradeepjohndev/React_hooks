import { useContext } from "react";
import Theme from "./Theme";

export default function Btn() {
  const { toggleTheme } = useContext(Theme);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
