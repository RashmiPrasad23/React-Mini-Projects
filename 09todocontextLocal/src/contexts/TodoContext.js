import { createContext,useContext } from "react";

export const TodoContext=createContext({
    // properties
    // component koi bhi ho,value idhr se he lenge
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    // functionalities
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    //ek cntext pass krna hoga useContext mei
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider