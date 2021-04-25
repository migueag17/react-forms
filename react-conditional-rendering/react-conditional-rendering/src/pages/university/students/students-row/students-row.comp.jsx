import React from 'react';

import './students-row.style.css'
import maleimage from './../img/Male-Logo-Sign.png'
import femaleimage from './../img/female-image.png'

const StudentsRow = (props) => {
    return (
    <div className="students-row">
            <span className="name-value">
             {props.student.name}
         </span>

    {
             props.student.grade <= 3
             ? //if-true
             <span className="grade-value statuscourse">{props.student.grade}</span>
             : //else
             <span className="grade-value">{props.student.grade}</span>
    }

    <span className="gender-value">{props.student.gender}</span>
    {
    props.student.gender === "Male"
             ? //if-true
             <img className="imagen" src={maleimage} />    
             : //else
             <img className="imagen" src={femaleimage} />   
    }
    </div>
    )
}

export default StudentsRow;