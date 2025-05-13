import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function StudentPortal() {
    const [newStudent,setNewStudent]=useState({name:'',age:''})
    const [student,setStudent]=useState([])

    useEffect(()=>{
        const storedStudent=JSON.parse(localStorage.getItem('student')) ||[]
        setStudent(storedStudent)
    },[])

    useEffect(()=>{
        localStorage.setItem('student',JSON.stringify(student))
    },[student])

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!newStudent.name || !newStudent.age) return alert("fill all detail")
        const newEntry={...newStudent,id:Date.now().toString()}
        setStudent([...student,newEntry])
        setNewStudent({name:"",age:""})
    }

    const handleDelete=(id)=>{
        const updatedList=student.filter(student=>student.id!==id)
        setStudent(updatedList)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={newStudent.name} onChange={(e)=>setNewStudent({...newStudent,name:e.target.value})}/>
        <input type="text" placeholder='Age' value={newStudent.age} onChange={(e)=>setNewStudent({...newStudent,age:e.target.value})}/>
        <button type='submit'>Add Student</button>
      </form>
      <ul>
        {student.map((student)=>(
        <li>
            <Link to={`/Student/${student.id}`}>
                {student.name}
            </Link>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentPortal
