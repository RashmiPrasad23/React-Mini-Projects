import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo,initialTodo,removeTodo} from '../features/todo/todoSlice'


function Todos() {
  //store se values lene k liye we will use useSelector
    const todos=useSelector(state=>state.todos)//store se jo bhi leni hai toh state ki access chahiye hogi,toh state.todos se value lekr todos variable mei store kr liya hmne


    //ab agr hm remove todo krna chahte hai toh isksa mtlb hmey action leni hai isiliye we will use useDispatch
    const dispatch=useDispatch()

    // useEffect(() => {
    //   // Retrieve todos from local storage on component mount
    //   // this is wrong. yaha kya ho rha tm poora todo array fetch kr rhi. but store at the end bss text mai krwa rhi ho dispatch(addTodo) krke
    //   const storedTodos = JSON.parse(localStorage.getItem('todos'));//
    //   if(storedTodos)
    //     dispatch(initialTodo(storedTodos));
    // }, [dispatch]);
  
    useEffect(() => {
      // Store todos in local storage whenever the todos change
      // console.log(todos)
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
      {/* //map lgaya display k liye */}
        {todos.map((todo) => {
          console.log('hein ji?',todo)
         return(
          <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          // key pass kri for iteration
          key={todo.id}
        >
          {/* div ka error yaha se hai. kyuki text hamara ab array ban chuka hai toh access nhi kr paa rha, ex: text: Array(1) isiliye neeche comment out krdogi toh no error */}
          <div className='text-white'>{todo.text}</div>
          <button
          // onclick mei ek callback fire qki direct fxn hm nhi de(wrna wo immediately execute ho jaayega) skte bcoz ony reference is allowed
           onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </li>
         )
})}
      </ul>
    </>
  )
}

export default Todos