import React from 'react'
import { increment,decrement } from '../redux/countSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Couters() {
    // const[state,dispatch]=useReducer(countReducer,initState)
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h3>Counters:{count}</h3>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>

    </div>
  )
}
