import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export const Comp = () => {
  const { isDark, toggleDark } = useContext(ThemeContext);
  return (
    <>
      <h2>Use Context</h2>
      <button onClick={toggleDark}>
        Switch to {isDark ? "light" : "dark"}
      </button>
    </>
  );
};
