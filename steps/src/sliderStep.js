import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [sliderValue, setSliderValue] = useState(1);
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + count);

  function handleSliderChange(e) {
    const raw = Number(e.target.value);
    setSliderValue(raw);
    setStep(raw);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
    setSliderValue(1);
  }

  return (
    <>
      <div className="step">
        <input
          type="range"
          min="1"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <h3>{step}</h3>
      </div>
      <div className="counter">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div className="message">
        <h3>
          {count >= 0
            ? `${count} days from today is ${targetDate.toDateString()}`
            : `${Math.abs(count)} days ago  ${targetDate.toDateString()}`}
        </h3>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
