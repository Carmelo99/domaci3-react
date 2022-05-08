import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Networks() {
  return (
    <div className="social">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='youtube'><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='facebook'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer" className='twitter'><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='instagram'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://rs.linkedin.com" target="_blank" rel="noopener noreferrer" className='linkedin'><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            </div>
  )
}

export default Networks