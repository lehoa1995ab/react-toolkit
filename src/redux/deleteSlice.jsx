import { createSlice } from "@reduxjs/toolkit";

const deleteSlice = createSlice({
    name:'product',
    initialState:[{
    id: 1,
    name: 'banh',
    price: '10$',
}],
    reducers: {
        deleteItem:(state,action)=>{
            const item = state.filter((item) => item.id === action.payload)
            return item
        }
    }

});
const { actions, reducer } = deleteSlice
export const { deleteItem } = actions;
export default reducer;