import "./styles.css";
// import { Comp } from "./hooks/useEffect";
// import { Comp } from "./hooks/useRef";
// import { Comp } from "./hooks/useContext/useContext";
// import { Comp } from "./hooks/useReducer";
// import { Comp } from "./hooks/useMemo";
// import { MemoHOC } from "./HOC/Memo";
// import { Comp } from "./hooks/useCallback/useCallback1";
import { Comp } from "./hooks/useCallback/useCallback2";
export default function App() {
  return (
    <div className="App">
      <h1>React Hooks🪝</h1>
      <Comp />
      {/* <MemoHOC /> */}
    </div>
  );
}
