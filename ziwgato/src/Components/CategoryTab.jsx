import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { setCategory } from '../redux/constants/productActionTypes'
import categories from "../data/categories.json"
import "../assets/styles/categoryTab.scss"

function CategoryTab() {
  const [selectedParent, setSelectedParent] = useState(null)
  const [selectedChild, setSelectedChild] = useState(null)
  const dispatch = useDispatch()

  const parentCategory = categories.categories.filter(c => c.parent === null)
  const childCategory = selectedParent
    ? categories.categories.filter(c => c.parent === selectedParent.id)
    : []

  return (
    <div>
      <div className='Category-tab'>
        {parentCategory.map((parent) => (
          <button
            key={parent.id}
            className={`button ${selectedParent?.id === parent.id ? "active" : ""}`}
            onClick={() => setSelectedParent(parent)}
          >
            {parent.name}
          </button>
        ))}
      </div>

      <div className='sub-Category-tab'>
        <div>
          {childCategory.map((child) => (
            <button
              key={child.id}
              className={`sub-tab ${selectedChild?.id === child.id ? "active" : ""}`}
              onClick={() => { setSelectedChild(child) 
                dispatch(setCategory(child.name))}}
            >
              {child.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryTab
