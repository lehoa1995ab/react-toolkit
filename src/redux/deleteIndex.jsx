import { configureStore } from "@reduxjs/toolkit";
import productSlice from './deleteSlice'
const store = configureStore({
    reducer: {
        product: productSlice
    }
})
export default store

