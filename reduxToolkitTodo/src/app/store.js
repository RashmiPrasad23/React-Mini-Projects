
//store ko configure krne k liye jiske andr obj hai
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

//hrr application ka ek he store hota hai
export const store=configureStore({
    //reducer btaani pdti hai,qki dataflow pta nhi chlta,feature k andr reducer bnaayi hmne
    reducer:todoReducer
})