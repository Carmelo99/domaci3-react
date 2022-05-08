import React from 'react'
import Widecard from '../components/Widecard';

function Education() {
  return (
    <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Student" where="Faculty of Organizational Sciences" from="October 2018" to="Present"/>
            <Widecard title="High School" where="Valjevska Gimnazija" from="2014" to="2018"/>
            </div>
  )
}

export default Education