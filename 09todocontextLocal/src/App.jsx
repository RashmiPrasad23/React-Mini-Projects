import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'

function App() {
   const [todos,setTodos]=useState([])
   
   const addTodo=(todo)=>{
    // direct setTode(todo) krne se puraani value saare htt jaati and nyi waali add ho jaati,but hm aisa nhi chahte
    // hm new todo ko puraane todo mei add krna chahte hai, isiliye we used this "prev" , ye hmey puraane array ki
    // values de degi n h ab nyi array mei spread operator use krkr old values k saath new waali ko add kr di
    // ab new waali todo jo hai ,wo bnani pdegi since todo ek object k form mei hai ,isiliye hm id set krenge jo ki dynamic ho
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
   }

   const updateTodo=(id,todo)=>{
    //kon sa aisa todo hai jo match kr rha hai id se,isiliye hmne puraani array li  n usmei map lgaya
    // n phir hmne match kri ki ocurrent prevtodo waali id passed id se match krti hai ya nhi,agr haan toh new todo set kr do,wrna
    // prev waali he rehne do
         setTodos((prev)=>prev.map((prevTodo)=>{prevTodo.id===id?todo:prevTodo}))
   }

   const deleteTodo=(id)=>{
    //we want an array to be returned jismei id to be deleted match na krti ho array mei
    // isiliye filter option choose kiya,joki wo saare elements return kregi joki contidion kosatisfy kregi
    // isiliye jo bhi todo match nhi kregi id se  wo saare jaakr return ho jaayenge
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
   }

   const toggleComplete=(id)=>{
    // agr prevTodo id se match kr jaati hai toh baaki saari value ko same rkho n ek ko bss change kro,
    // isiliye spread operator se prev saari value rkhi n jo change krni hai usko override kr do
    //(i.e jo bhi uski prev value hai uske saamne ek exclamation sign lga do -to cnvert true to false)
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
   }

   //hmaare paas already todo present ho skte hai ,toh usko hm localstorage se lekr apne 
   //paas laana chahte hai, isiliye getItem,
   useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
   },[])

   //local storage mei item set krne k liye taaki wo present rhe even though hmne app ko close kr diya hai
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])

  return (
   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />

            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo)=>(
                  <div key={todo.id}
                  className='w-full'>
                     <TodoItem  todo={todo}/>
                  </div>
                ))}
            </div>
        </div>
     </div>
   </TodoProvider>
    
  )
}

export default App
