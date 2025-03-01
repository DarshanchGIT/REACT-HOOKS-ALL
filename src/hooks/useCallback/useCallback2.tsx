import { memo, useCallback, useState } from "react";

export const Comp = () => {
  const onClickF1 = useCallback(() => {
    alert("onClick fn 1");
  }, []);

  const onClickF2 = () => {
    alert("onClick fn 2 ");
  };

  const [count, setCount] = useState(0);
  return (
    <>
      <h2>useCallback2</h2>
      <br />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count: {count}
      </button>
      <br />
      <br />
      <ChildComponent onClick={onClickF1} />
    </>
  );
};

const ChildComponent = memo(
  //
  ({ onClick }: { onClick: () => void }) => {
    console.log("Child Component");
    return (
      <>
        <button className="btn" onClick={onClick}>
          Child Component
        </button>
      </>
    );
  }
);
