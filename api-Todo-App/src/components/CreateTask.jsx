import React, { useState } from 'react'
import {PostTodoApi} from '../api/PostTodoApi'


function CreateTask() {
    const [title,setTitle]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const newTodo={
            title:title,
            completed:false
        }

        try {
            const response=await PostTodoApi(newTodo)
            console.log("New task created",response);
            setTitle('')
        } catch (error) {
            console.log("Error in posting Task:",error);
        }
    }
    
  return (
    <div>
      <h3>create task</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" className='form-control mb-2' value={title} onChange={(e)=>setTitle(e.target.value)} 
        placeholder='enter Task'/>
        <button type='submit' className='btn btn-primary'>Add task</button>
      </form>
    </div>
  )
}

export default CreateTask
