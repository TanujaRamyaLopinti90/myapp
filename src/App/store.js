import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/Todolist/todoSlice'
export const store = configureStore({
    reducer:{
      c:CounterReducer,
      t:todoReducer
      
    }
  
})

