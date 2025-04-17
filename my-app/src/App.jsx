import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import ValueRealTime from './components/ValueRealtime'
import Visibility from './components/Visibility'
import Items from './components/Items'


function App() {
  const [count, setCount] = useState(0)
  function one(){
    setCount(1);
  }
  function two(){
    setCount(2);
  }

  function three(){
    setCount(3);
  }
  return (
    <>
       {/* <p>Beginner exercises</p>
      <Count /> 
       <ValueRealTime/>
      <button onClick={one}> one </button>
      <button onClick={two}> two</button>
      <button onClick={three}> three</button>
    <Visibility show={count}/>  */}
      {/* <p>hwllo</p> */}
      <Items/>
    </>
  )
  console.log(why)
}

export default App
