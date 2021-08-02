import { useState } from "react";
import "./App.css";
import MainGame from "./components/MainGame";
import Motion from "./components/Motion";
import Over from "./components/Over";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <div className="App">
      {display ? (   
        <Motion setDisplay={setDisplay} />
      ) : (
        <MainGame setDisplay={setDisplay} />
      )}
    </div>
  );
}

export default App;
