import { useContext } from "react";
import Theme from "./Theme";
import Btn from "./Btn";

export default function Mycomponent() {
  const { theme } = useContext(Theme);

  return (
    <>
      <h1>{theme}</h1>
      <Btn />
    </>
  );
}
