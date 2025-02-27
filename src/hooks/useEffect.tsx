import { useState, useEffect } from "react";

const Example = () => {
  useEffect(() => {
    //useEffect can also use be used render something at when component unmounts too
    console.log("Example comp mounted");
    return () => {
      console.log("Example comp unmounted");
    };
  }, []);
  return (
    <>
      <div style={{ margin: "2vw" }}>Example comp</div>
    </>
  );
};

export const Comp = () => {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    //passing no dependency array will run this useEffect at every re-render
    //empty dependency array will cause it run only once
    console.log("Main Component Mounted or changed");
  }, [text]);

  return (
    <>
      <h2>useEffect</h2>
      <h2>Text is: {text}</h2>
      <input
        type={text}
        placeholder="Enter text please"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      {toggle && <Example />}
      <button style={{ margin: "2vw" }} onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"} example comp
      </button>
    </>
  );
};
