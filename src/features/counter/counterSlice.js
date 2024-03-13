import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count:10
}
export const counterSlice=createSlice({
    name:'Counter',
    initialState,
    reducers:{
        inc:( state,action)=>{
            // state.count=state.count+1
            state.count++
        },
        dec:(state,action)=>{
        //  state.count=state.count+1
        state.count--  
        },
        reset:(state,action)=>{
            state.count=initialState.count
        }
    }
})
export var {inc,dec,reset}=counterSlice.actions;
export default counterSlice.reducer;
