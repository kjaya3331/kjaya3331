import React from 'react'

function Counter() {
    let [count,setCount] = React.useState(0);
    const increment = () => {
        count++;
    setCount(count);
    }
    const reset = () => {
        count =0;
        setCount(count)
    }
    const decrement = () => {
        count--;
        setCount(count);
        
    }

  return (
    <div>
        <h3 id='counter'>{`Count is: ${count}`}</h3>
        <button onClick={increment}>+</button>
        <button onClick={reset}>=</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter