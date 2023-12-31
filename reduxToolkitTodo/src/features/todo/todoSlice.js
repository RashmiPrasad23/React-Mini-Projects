//slice bnaane k liye method createSlice
import {createSlice,nanoid} from '@reduxjs/toolkit'
// nanoid is used to generate unique ids


//store statring ei kaisa hoga,isiliye initial state bnega,
//initial state can be array or object 
const initialState={
    //initialState k andr kuch toh values hogi na ,toh hmne array le li jismei id and text property hai
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice=createSlice({
    //to create slice we need 3 things->name,initialstate and reducers ki saari list jo bhi needed hai
    //ye property redux toolkit mei hai
    name:'todo',
    initialState,
    reducers:{
        //reducers k andr jitni mrzi utni fxns hm daal skte hai in form of key value
        //state->current state jo bhi hai ,wo milta hai(update state value in store->state mei milti hai)
        //action ->id sb milta jiski help se hm value edit ya remove kr ske hai
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state,action)=>{
            const {id,text}=action.payload;
            state.todos=state.todos.map((todo)=>{todo.id===id?{text:text}:todo})
        }
    }
})

export const {addTodo,removeTodo,updateTodo} =todoSlice.actions
export default todoSlice.reducer