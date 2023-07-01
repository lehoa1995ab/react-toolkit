import { configureStore } from "@reduxjs/toolkit";
import deleteSlice from './deleteSlice'

const store=configureStore({
    reducer:{
        product:deleteSlice,
        },
})
export default  store;