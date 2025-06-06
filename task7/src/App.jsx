import './App.css'
import { useState } from 'react'

const App = () =>{
  const [count, setCount] = useState(0)
  return(
    <>
      <h1>MY COUNTER APP</h1>
      <h2 className="screen">{count}</h2>
      <button className="button" onClick={() =>setCount((count) => count == 0 ? count : count-1)}>-</button>
      <button className="button" onClick={() =>setCount((count) => count+1)}>+</button>
    </>
  )
}

export default App
