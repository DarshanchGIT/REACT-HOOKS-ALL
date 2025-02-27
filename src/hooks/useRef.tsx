import { useEffect, useRef } from "react";
//create imutable object, which can persist through stages
//thing like document.querySelector and things like that
//also saves from lots of re renders
export const Comp = () => {
  //let's implement you want to get focused on some input whenever u first load the page such as otp filling can be a very good exmaple for things
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    //.current properyt which will use to get current state
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <h1>useRef</h1>
      <input type="text" placeholder="Enter values" ref={inputRef} />
    </>
  );
};
