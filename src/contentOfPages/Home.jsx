import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profpic1.jpg';
import Networks from '../components/Networks'

function Home() {
  return (
    <div className="condiv home">
             <img src={profilepic} alt="ProfilePic" className="profilepic"></img> 
            <ReactTypingEffect className="typingeffect" text={['I am Antonije Dimitrijević','I am a student of the Faculty of Organizational Sciences in Belgrade']} speed={100} eraseDelay={700}/>
            <Networks />
            </div>
  )
}

export default Home