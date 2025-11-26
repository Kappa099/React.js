import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + count);
  return (
    <>
      <div className="step">
        <button onClick={() => setStep(step - 1)}>-</button>
        <h3>Step: {step}</h3>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div className="counter">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div className="message">
        <h3>
          {count >= 0
            ? `${count} days from today is ${targetDate.toDateString()}`
            : `${Math.abs(count)} days ago  ${targetDate.toDateString()}`}
        </h3>
      </div>
    </>
  );
}
