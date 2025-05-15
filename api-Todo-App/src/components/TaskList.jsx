import React, { useEffect, useState } from 'react'
import {GetTodoApi} from '../api/GetTodoApi'

function TaskList() {
    const [tasks,setTask]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const todos=await GetTodoApi()
                setTask(todos)
            } catch (error) {
                console.log("failed to load task!",error)
            }
        }
        fetchData()
    },[])
console.log(tasks);

  return (
    <div>
      <h2>tasks</h2>
      <ul>
        {tasks?.map((task,index)=>(
            <li key={index}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList