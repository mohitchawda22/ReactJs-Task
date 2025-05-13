import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function StudentDetail() {

    const { id } = useParams()
    const [student, setStudent] = useState(null)

    const fetchStudent = async () => {
        try {
            const res = await axios.get(`https://680cbe5f2ea307e081d4e802.mockapi.io/chat/student/${id}`)
            setStudent(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchStudent()
    }, [])

    if (!student) return <p>Loading student details...</p>
    
    return (
        <div className='text-center'>
            <h2>Name:{student.name}</h2>
            <p>Email: {student.email}</p>
        </div>
    )
}

export default StudentDetail
