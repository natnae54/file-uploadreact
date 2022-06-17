import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import {inc,dec} from "./counterSlice"
export default function Counter() {
const value=useSelector((state)=>state.counter.value)
const dispatch=useDispatch()

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(inc())}>add</button>
      <button onClick={()=>dispatch(dec())}>sub</button>
    </div>
  )
}
