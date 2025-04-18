import { useState } from "react";
import './Count.css';

function Count() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        {count > 0 ? (setCount(count - 1)) : (setCount(0))}
        
    }

    function reste(){
        setCount(0)
    }
    return (
        <div className="viewCount">
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={reste}>reset</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Count;