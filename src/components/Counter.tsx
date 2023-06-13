import { useState } from "react"
import classes from './Counter.module.scss'

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
            <button className={classes.btn} onClick={increment}>inc</button>
            <button className={classes.btn} onClick={decrement}>decr</button>
        </div>
    )
} 