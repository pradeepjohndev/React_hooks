import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Button from "./Button";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <Button />
    </div>
  );
}
