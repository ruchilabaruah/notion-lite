import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-2 m-4 font-bold border border-red-100 md:border-red-500">
      Hello
    </div>
  );
}

export default App;
