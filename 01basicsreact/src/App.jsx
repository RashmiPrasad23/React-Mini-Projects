import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState (15)
  // let counter=5

  const addValue=()=>{
   if(counter<20){
    setCounter(counter+1);
   }
    
    // console.log(counter);
    //counter=counter+1;
    //setCounter(counter)
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    
   
  }

  return (
   <>
   <h1>Chai aur react</h1>
   <h2>counter value: {counter}</h2>
   <button onClick={addValue}>Add value </button>
   <br />
   <button onClick={removeValue}>remove value</button>
   </>
  )
} 

export default App
