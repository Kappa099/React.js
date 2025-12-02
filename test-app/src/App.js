
const colors = [
  { id: 1, value: "red" },
  { id: 2, value: "blue" },
  { id: 3, value: "green" },
  { id: 4, value: "yellow" },
  { id: 5, value: "black" },
  { id: 6, value: "purple" },

];

export default function App(){
  return <div className="app">
    <Screen/>
    <UserOptions/>
  </div>
}

function Screen(){
  return <div className="screen">

  </div>
}


function UserOptions(){
  return <div className="buttons">
    {colors.map(color => (
    <button key={colors.id} style={{BackgroundColor: colors.value}}></button>))}
  </div>
}