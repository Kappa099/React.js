import { useState } from "react";

export default function App(){
  const [items, setItems] = useState([])

  function HandleAddItems(item){
    setItems((items) => [...items, item])
  }

  function handleDelete(id){
    setItems(items => items.filter((item) => item.id !== id))
  }
  function handleToggleItem(id){
    setItems((items) => items.map((item)=> item.id === id ? {...item, packed: !item.packed} : item))
  }
  return <div className="app">
    <Logo/>
    <Form onAddItems={HandleAddItems} />
    <PackingList items={items} onDeleteItem={handleDelete} onToggleItem={handleToggleItem}/>
    <Stats items={items}/>
  </div>
}

function Logo(){
  return <h1>🌴Far Away🧳</h1>
}


function Form({onAddItems}){
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)  

  function handleSubmit(e) {
  e.preventDefault();

  if(!description) return;

  const newItem = {description, quantity, packed : false, id: Date.now()}
  console.log(newItem)

  onAddItems(newItem)
  
  setDescription("")
  setQuantity(1)

}
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip? 😍</h3>
    <select value={quantity} onChange={(e)=>
      setQuantity(Number(e.target.value))}>
      {Array.from({length: 20}, (_, i) => i + 1).
      map(num=><option value={num} key={num}>
        {num}
      </option>)}
    </select>
    <input type="text" placeholder="Item..." value={description}
     onChange={(e)=> setDescription(e.target.value)}></input>
    <button>Add</button>
  </form>
}

function PackingList({items, onDeleteItem, onToggleItem}){
  const [sortBy, setSortBy] = useState("input")
  let sortedArr;
  if(sortBy === "input") sortedArr = items
  return <div className="list">
      <ul>
      {sortedArr.map(item => <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>)}
      </ul>
      <div className="actions" onChange={(e) =>setSortBy(e.target.value)}>
        <select value={sortBy}>
          <option value="input">Sort By input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By packed status</option>
        </select>
      </div>
    </div>
}
function Item({item, onDeleteItem, onToggleItem}){
  return <li>
    <input type="checkbox" value={item.checked} onChange={()=> onToggleItem(item.id)}/>
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>
    {item.quantity} {item.description}
    </span>
    <button onClick={()=> onDeleteItem(item.id)}>❌</button>


  </li>
}

function Stats({items}){
  if(!items.length) return <p className="stats">
    <em>Start adding some items to your packing list 🚀</em>
  </p>
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentage = Math.round((numPacked / numItems) * 100)
  return <footer className="stats">
    <em>
      {percentage === 100 ? "You got everything ready to go ✈️" :
      `🧳You have ${numItems} items on your list, and you already packed ${numPacked} ${percentage}%`}
      </em>
  </footer>
}
 