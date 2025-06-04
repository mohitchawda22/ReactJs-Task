import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { setCategory } from '../redux/constants/productActionTypes'
import categories from "../data/categories.json"
import "../assets/styles/categoryTab.scss"

function CategoryTab() {
  const dispatch = useDispatch()
  const parentCategory = categories.categories.filter(c => c.parent === null)
  const defaultParent=parentCategory[0] ||null

  const defaultChild=defaultParent ? categories.categories.find(c=>c.parent===defaultParent.id):null

  const [selectedParent, setSelectedParent] = useState(defaultParent)
  const [selectedChild, setSelectedChild] = useState(defaultChild)
  
  const childCategory = selectedParent
    ? categories.categories.filter(c => c.parent === selectedParent.id)
    : []

    useEffect(()=>{
      if(selectedChild){
        dispatch(setCategory(selectedChild.name))
      }
    },[dispatch,selectedChild])
    
  return (
    <div>
      <div className='Category-tab'>
        {parentCategory.map((parent) => (
          <button
            key={parent.id}
            className={`button ${selectedParent?.id === parent.id ? "active" : ""}`}
            onClick={() => {setSelectedParent(parent)
              const firstChildCategory=categories.categories.find(c=>c.parent===parent.id)
              setSelectedChild(firstChildCategory)
              if (firstChildCategory) {
                dispatch(setCategory(firstChildCategory.name))
              }
            }}
          >
            {parent.name}
          </button>
        ))}
      </div>

      <div className='sub-Category-tab'>
        <div className='scroll'>
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
