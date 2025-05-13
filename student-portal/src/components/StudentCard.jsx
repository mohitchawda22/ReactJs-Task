import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function StudentCard({Name,Email,id}) {
  return (
    <div>
       {/* <p key={student.id}><Link to={`/Student/${student.id}`}>{student.name}</Link></p> */}
       <h3>Name:{Name}</h3>
       <p>Email:{Email}</p>
       <Link to={`/student/${id}`}>View Details</Link>
    </div>
  )
}

StudentCard.proptypes={
    Name:PropTypes.string,
    Email:PropTypes.string,
}

export default StudentCard
