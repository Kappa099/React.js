import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [number, setNumber] = useState("");
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function ResetBtn() {
    const confirmed = window.confirm(
      "Are you sure you want to delete everything?"
    );
    if (confirmed) setNumber(""), setTip(0), setFriendTip(0);
  }

  return (
    <div className="calculator">
      <Bill number={number} setNumber={setNumber} />
      <Feedback onChange={setTip} value={tip}>
        How did you like the service?
      </Feedback>
      <Feedback onChange={setFriendTip} value={friendTip}>
        How did your friend like the service?
      </Feedback>
      <Calculator number={number} tip={tip} friendTip={friendTip} />
      <Reset onClick={ResetBtn} />
    </div>
  );
}
function Bill({ number, setNumber }) {
  return (
    <div className="bill">
      <span>How much was the bill?</span>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
}

function Feedback({ value, onChange, children }) {
  return (
    <div classname="feedback">
      {children}
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        <option value={0}>dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}
function Calculator({ number, tip, friendTip }) {
  const bill = Number(number);
  if (number === "") {
    return null;
  }

  const average = (tip + friendTip) / 2 / 100;
  const tipAmount = bill * average;
  const total = bill + tipAmount;

  return (
    <h2>
      You Pay ${total} (${bill}+${tipAmount})
    </h2>
  );
}
function Reset({ onClick }) {
  return (
    <button onClick={onClick} classname="reset">
      Reset
    </button>
  );
}
