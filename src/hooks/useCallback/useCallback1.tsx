// The `useCallback()` hook in React returns a **memoized version of a function**, preventing it from being re-created on every render unless its dependencies change. This helps optimize performance by ensuring child components relying on the function don’t re-render unnecessarily.

import { useCallback, useState, useEffect } from "react";

export const Comp = () => {
  const [triggerRender, setTriggerRender] = useState(0);
  const [count, setCount] = useState(0);

  //whenever a count value changes this callback in useCallback will run, making new function refrence since, new function ref is creating so useffect clbck will also run, but when a re-renders(not the count-value), this func- will return a cached a function ref becuaase it is wrapped inside a useCallback
  const func = useCallback(() => {
    console.log("Callback ran");
  }, [count]);

  useEffect(() => {
    console.log("Function refrence changed");
  }, [func]);

  console.log("Function reference:", func);

  return (
    <>
      <h2>useCallback1</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "3vw" }}>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          COUNT + 1
        </button>
        <button onClick={() => setTriggerRender((prev) => prev + 1)}>
          Trigger Re-render
        </button>
      </div>
    </>
  );
};
