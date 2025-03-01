import { memo, useState } from "react";

const Comp = memo(({ name, age }: { name: string; age: number }) => {
  console.log("Comp rendering");
  return (
    <>
      <h2>
        Name is: {name} and age is : {age}
      </h2>
    </>
  );
});
export const MemoHOC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>HOC - Memo</h2>
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>Inc Count</button>
        <Comp name="Darshan" age={45} />
      </div>
    </>
  );
};
