import { useState,useCallback ,useEffect,useRef} from 'react'

import './App.css'

function App() {
  //for length change of password
  const [length, setLength] = useState(8)
  //if number allowed in password
  const [numberAllowed,setNumberAllowed]=useState(false);
  // if char allowed in password
  const [charAllowed,setCharAllowed]=useState(false);
  // password change
  const [password,setPassword]=useState("")

  //useRef hook for password copy
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_-+=[]{}~`"
    for(let i=1;i<=length;i++){
       let char=Math.floor(Math.random()*str.length+1)
       pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])



 const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  //for setting range of selection area
  // passwordRef.current?.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password)
 },[password])




  // for running the passwordGenerator fxn
 useEffect(()=>{
    passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly  ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-2'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox"
                 defaultChecked={numberAllowed}
                 id="numberInput"
                 onChange={()=>{
                   setNumberAllowed((prev)=>!prev);
                 }} 
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox"
                 defaultChecked={charAllowed}
                 id="numberInput"
                 onChange={()=>{
                   setCharAllowed((prev)=>!prev);
                 }} 
           />
           <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
