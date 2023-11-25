import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"rashmi",
    age:21
  }
  let newArr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 mb-4'>tailwind test</h1>
     <Card channel="chaiaurcode" btnText="click me"/>
     <Card  channel="hitesh" btnText="visite me"/>

    </>
  )
}

export default App
// user={myObj} myArr={{name:"chai"}}   oneObj={newArr}