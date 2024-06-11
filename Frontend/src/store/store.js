import {configureStore } from "@reduxjs/toolkit"
import userreducer from "../slice/userslice"
const store = configureStore({
   reducer : 
   {
     userdetail : userreducer
   }
})

export default store;