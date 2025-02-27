import "./styles.css";
// import { Comp } from "./hooks/useEffect";
// import { Comp } from "./hooks/useRef";
// import { Comp } from "./hooks/useContext/useContext";
import { Comp } from "./hooks/useReducer";
export default function App() {
  return (
    <div className="App">
      <h1>React Hooks🪝</h1>
      <Comp />
    </div>
  );
}
