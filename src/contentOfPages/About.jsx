import React from 'react'

function About({title, hobbies, buttonName, text, addMore}) {

  return (
    
        <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <h4>Hello Everyone,</h4>
        <h1>I'm Antonije Dimitrijević</h1>
        <h3>Student <u>FON</u> | Belgrade <u>Serbia</u></h3>
        <br></br>
        <p>
        I have various interests in the field of IT. 
        Some of the fields that particularly interest me are Web Development and Data Science.
        </p>
        <button className="button-1" onClick={addMore}>{buttonName}</button>
        <h2 className='hobbytitle'>{title}</h2>
        {hobbies.map((hobby)=>{return <p>{hobby.title} : {hobby.content}</p>})}
        </div>
  )
}

export default About