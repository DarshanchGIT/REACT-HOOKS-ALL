import { useState, useMemo } from "react";

//use memo caches the result between re-renders here in this we can understand that whenever we give input we get the result, and i we trigger re-render by btn there, it will re-render the Comp which will cause expesnive calculation to run, since the result is used and wrapped inside useMemo " It caches the result between re-renders"

export const Comp = () => {
  const [num, setNum] = useState("");
  const [reRender, setReRender] = useState(0);

  const result = useMemo(() => {
    console.log(`Expensive calculation for ${num}`);
    const num2 = Number(num);
    return num2 * num2;
  }, [num]);

  return (
    <>
      <h2>useMemo</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "3vw" }}>
        Expensive calculation result: {result}
        <input
          type="text"
          placeholder="Enter a number"
          value={num}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNum(e.target.value)
          }
        />
        <button type="submit" onClick={() => setReRender((prev) => prev + 1)}>
          Re-render
        </button>
      </div>
    </>
  );
};
