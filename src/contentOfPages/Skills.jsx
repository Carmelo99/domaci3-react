import React from 'react'


function Skills() {

const myskills = ['HTML','CSS','JS','PHP','REACT JS','PYTHON','JAVA','C','C#','XML','JSON'] ;


  return (
    <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {myskills.map((value)=>{
                return <li><b>{value}</b></li>
            })}
            </ul>
            </div>
  )
}

export default Skills