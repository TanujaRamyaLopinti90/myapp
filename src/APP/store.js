import {  configureStore  } from '@reduxjs/toolkit'
import LoginReducer from '../features/login/loginSlice'

export const store=configureStore({
    reducer:{login:LoginReducer}
})
export default store