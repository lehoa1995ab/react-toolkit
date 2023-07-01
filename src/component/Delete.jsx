import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../redux/deleteSlice'

export default function Counter() {
    const items = useSelector(state => state.product)
    console.log("🚀 ~ file: Counter.jsx:22 ~ Counter ~ item:", items)

    const dispatch = useDispatch()
    return (
        <>
            {items.map((item) =>
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            )}
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Price' />
            <button>Add</button>
            <button onClick={() => dispatch(deleteItem())}>Delete</button>
        </>

    )
}
