import React from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'

function User() {
    const params=useParams()
    const {name}=params
    const id=123
    const user=useOutletContext()
  return (
    <div>
      <h1 className='text-center text-capitalize text-secondary'>
        This is {name} page
        <p>name:{user.name}</p>
        <p>Role:{user.role}</p>
        <Link to={`/user/${id}`}>Go to the UserList page with Id {id}</Link>
      </h1>
    </div>
  )
}

export default User
 