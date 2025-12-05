import { useState } from "react";

const colors = [
  { id: 1, value: "red" },
  { id: 2, value: "blue" },
  { id: 3, value: "green" },
  { id: 4, value: "yellow" },
  { id: 5, value: "black" },
  { id: 6, value: "purple" },

];

export default function App(){
  const [btnColor, setBtnColor] = useState("white")
  return <div className="app">
    <Screen color={btnColor}/>
    <UserOptions onSelect={setBtnColor}/>
  </div>
}

function Screen({color}){
  return <div className="screen" style={{backgroundColor: color}}>

  </div>
}


function UserOptions({onSelect}){

  return <div className="buttons">
    {colors.map(color => (
    <button key={color.id} style={{backgroundColor: color.value}} onClick={() => onSelect(color.value)}></button>))}
  </div>
}