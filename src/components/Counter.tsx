import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>decr</button>
        </div>
    )
}