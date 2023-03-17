import React from 'react'
import useCounter from './useCounter';

function Counter1() {
    const [count,Increment,Decrement] = useCounter(10);
  return (
    <div>
      
      <h3>{count}</h3>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter1
