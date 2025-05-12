import React from 'react'
import StudentList from '../../components/Layouts/StudentList/StudentList'

function Dashboard() {
  return (
    <div className='container'>
        <h1 className='text-center'>Dashboard</h1>
        <h3 className='text-center'>Student List</h3>
        <StudentList/>
    </div>
  )
}

export default Dashboard
