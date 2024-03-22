import {  createSlice  } from '@reduxjs/toolkit'

export const LoginSlice=createSlice({
    name:'Login',
    initialState,
    reducers:{
        addlogindata:(state,action)=>{
            state.addlogindata.push(action.payload)
        }
    }

})

export const { addlogindata }=LoginSlice.actions;
export default LoginSlice.reducer