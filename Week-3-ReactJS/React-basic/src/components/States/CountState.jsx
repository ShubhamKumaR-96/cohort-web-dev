import React, { useState } from 'react'

const CountState = () => {
    const [x,setX]=useState(5)
    const [count,setCount]=useState(10)
  return (
    <div>
      <p>X: {x}</p>
      <p>Count Val: {count}</p>
      <div>
        <button onClick={()=>setX(x+1)}> click an update X val</button>
        <button>Click and update count val</button>
      </div>
    </div>
  )
}

export default CountState
