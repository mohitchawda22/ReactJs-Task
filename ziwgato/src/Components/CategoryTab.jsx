import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { SET_CATEGORY } from '../redux/actions/productsAction'

function CategoryTab() {
    const categories=useSelector(state=>state.products.categories)
    const selected=useSelector(state=>state.products.selectedCategory)
    const dispatch=useDispatch
  return (
    <div>
     { categories.map((cat,index)=>(
        <button key={index} onClick={()=>dispatch({type:SET_CATEGORY,payload:cat})}  style={{ fontWeight: selected === cat ? "bold" : "normal" }}>
            {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryTab
