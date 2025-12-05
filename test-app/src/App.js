import { useState } from "react"

export default function App(){
    const [count, setCount] = useState(0)

    function incCount(){
        setCount(count + 1)
    }
    function decCount(){
        setCount(count - 1)
    }
    return <div>
    <CounterDisplay count={count}/>
    <CounterControl incCount={incCount} decCount={decCount}/>
    </div>
}

function CounterDisplay({count}){
    return <div className="display">
        <h3>{count}</h3>
    </div>
}


function CounterControl({incCount, decCount}){
    return <div className="counter">
        <button onClick={decCount}>-</button>
        <button onClick={incCount}>+</button>
    </div>
}