import { useState, useEffect } from 'react'
import './App.css'


// creating a react component and props
const Func = ({title}) => { 
  return(
        <header>{title}</header> 
  )
}

// creating and using a usestate and useEffect hook
 const StateHook = () =>{
  const [counter, setCounter] = useState(0)
  const [liked, setLiked] = useState(false)
  useEffect(()=>{
    liked ? window.alert('thanks for liking') : window.alert('try diong yours to see if its that easy')
  }, [liked])

  return(
    <>
     <button onClick={() => setCounter((counter) => counter == 10 ? counter=0  : counter+=1)}>{counter}</button>
     <button onClick={() => setLiked((liked)=> !liked)}>{liked ? 'liked':'like'}</button>
    </>
  )
 }
const food = <h1>count</h1>

function App() {
 
  return (
    <>
        <h1>HELLO WORLD</h1>
        {/* rendering a component and props*/}
        {food}
        <Func title='meme-forest' />
        <Func title='skatech' />
        <Func title='upcoming' />
        <StateHook />

    </>
  )
}

export default App
