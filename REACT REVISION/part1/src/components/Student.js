
//THIS IS FOR UNDERSTANDING PROPS

import Student2 from "./Student2"

import "../components/Student.css"
import propTypes from 'prop-types'


const Student = (props) => {
  return (
    <div className="Student-Props">
     <h1>THIS IS FOR UNDERSTANDING PROPS</h1>
     <h2>STUDENT</h2>
     <h2>{props.names}</h2>
     <h2>{props.age}</h2>
     <Student2 names ={props.names} />
    </div>
  )
}

Student.propTypes = {
  names : propTypes.string,
  age :propTypes.number
}
Student.defaultProps= {
  names :"Name",
  age :0
}
export default Student
