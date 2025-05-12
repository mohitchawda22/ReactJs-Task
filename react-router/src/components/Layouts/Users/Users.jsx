import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Users() {
    const data=useLoaderData()
  return (
    <div>
      Users list 
      <p>user Id :{data.id}</p>
      <p>user Id :{data.message}</p>
    </div>
  )
}

export default Users
