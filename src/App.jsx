import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => (step > 1 ? setStep((s) => s - 1) : null)}>
          -
        </button>
        <span> Step: {step} </span>
        <button onClick={() => (setStep((s) => s + 1))}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : count < 0
            ? `${Math.abs(count)} days ago from today is `
            : ""}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
