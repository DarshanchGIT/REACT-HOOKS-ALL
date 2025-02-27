import { useReducer } from "react";

const initialState: number = 0;

function countReducer(state: any, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "INCREMENT5":
      return state + action.valueToIncrease;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
export const Comp = () => {
  const [count, dispatch] = useReducer(countReducer, initialState);

  //count is what you need to use
  // dispatch - understand it like a person who gives order to reducer to do this or do that by attaching type of action by calling itself on button trigger
  //countReducer(reducer) - a function(state, action){..}
  // which does the work - action.type tells about the action to perform by reducer

  return (
    <>
      <h2>useEffect</h2>
      <h3>count: {Math.max(count, 0)}</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "3vw" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          {" "}
          INCREMENT+
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT5", valueToIncrease: 5 })}
        >
          INCREMENT+5
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          {" "}
          DECREMENT-
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>
    </>
  );
};
