import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Your Mood Tracker</h1>
      <MoodTracker />
    </div>
  );
}
function MoodTracker() {
  const [moods, setMoods] = useState([
    { id: 1, date: "2025-12-23", mood: "happy" },
    { id: 2, date: "2025-12-22", mood: "neutral" },
    { id: 3, date: "2025-12-21", mood: "sad" },
  ]);

  function handleAddMood(newMood) {
    setMoods([...moods, newMood]);
  }

  return (
    <div className="mood-tracker">
      <h2>Track your moods</h2>
      <MoodForm onAddMood={handleAddMood} moods={moods} />
      <MoodList moods={moods} />
      <MoodSummary moods={moods} />
    </div>
  );
}

function MoodForm({ moods, onAddMood }) {
  const today = new Date().toISOString().split("T")[0];
  const [selectedMood, setSelectedMood] = useState("happy");
  const [selectedDate, setSelectedDate] = useState(today);

  function handleSubmit(e) {
    e.preventDefault();

    const newMood = {
      id: Date.now(),
      date: selectedDate,
      mood: selectedMood,
    };
    onAddMood(newMood);
    setSelectedDate(today);
  }
  return (
    <form className="mood-form" onSubmit={handleSubmit}>
      <label htmlFor="mood">Select your mood:</label>
      <select
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
      >
        <option value="happy">😊 Happy</option>
        <option value="neutral">😐 Neutral</option>
        <option value="sad">😢 Sad</option>
      </select>

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button type="submit">Add Mood</button>
    </form>
  );
}

function MoodList({ moods }) {
  return (
    <ul className="mood-list">
      {moods.map((mood) => (
        <MoodItem mood={mood.mood} id={mood.id} date={mood.date} />
      ))}
    </ul>
  );
}

function MoodItem({ mood, id, date }) {
  return (
    <li key={id}>
      {mood === "happy" && "😊 Happy"}
      {mood === "neutral" && "😐 Neutral"}
      {mood === "sad" && "😢 Sad"} — {date}
    </li>
  );
}
function MoodSummary({ moods }) {
  console.log(moods);
  const happyArr = moods.filter((mood) => mood.mood === "happy").length;
  const sadArr = moods.filter((mood) => mood.mood === "sad").length;
  const neutralArr = moods.filter((mood) => mood.mood === "neutral").length;

  return (
    <div className="mood-summary">
      <h3>Mood Summary</h3>
      <p>😊 Happy: {happyArr}</p>
      <p>😐 Neutral: {neutralArr}</p>
      <p>😢 Sad: {sadArr}</p>
    </div>
  );
}
