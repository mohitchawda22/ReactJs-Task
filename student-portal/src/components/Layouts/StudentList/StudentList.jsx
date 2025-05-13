import React, { useEffect, useState } from 'react'
import axios from "axios"
// import {Link} from "react-router-dom"
import StudentCard from '../../StudentCard'

function StudentList() {
    const [StudentList,setStudentList]=useState([])
    const StudentApi="https://680cbe5f2ea307e081d4e802.mockapi.io/chat/student"

    const fetchApi=async()=>{
        try {
            const res=await axios.get(StudentApi)
            setStudentList(res)
        } catch (error) {
            console.log(error,"error");
        }
    }
    useEffect(()=>{
       fetchApi() 
    },[])

    // console.log(StudentList?.data);
    
  return (
    <div>
        {StudentList?.data?.map((student) => (
            // <p key={student.id}><Link to={`/Student/${student.id}`}>{student.name}</Link></p>
            <StudentCard 
                Name={student.name}
                Email={student.email}
                id={student.id}
                key={student.id}
            />
        ))}
    </div>
  )
}

export default StudentList
