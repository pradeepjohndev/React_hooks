import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function Redu() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count < 0 ? 0 : count}</h1>

      <button onClick={() => dispatch({ type: "red" })}>+</button>
      <button onClick={() => dispatch({ type: "blue" })}>-</button>
      <button onClick={() => dispatch({ type: "green" })}>Reset</button>
    </>
  );
}
