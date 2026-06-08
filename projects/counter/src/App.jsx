//ui updation is controlled via react
//hooks
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div id="main">
        <h1 id="h1">
          Count Value : <span>{counter}</span>
        </h1>
        <button id="inc" onClick={increaseCounter}>
          Increase Counter
        </button>
        <button id="dec" onClick={decreaseCounter}>
          Decrease Counter
        </button>
      </div>
    </>
  );
}

export default App;
