import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link, useParams} from "react-router-dom"

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

     const params=useParams()
    const {name}=params
    
  return (
    <div>
        {StudentList?.data?.map((student) => (
            <p key={student.id}><Link to={`/Student/${name}`}>{student.name}</Link></p>
        ))}
    </div>
  )
}

export default StudentList
