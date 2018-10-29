//-----------------------------------------------------------------------------
// src/components/blogger-info-social-icons.js
//-----------------------------------------------------------------------------
import React      from 'react'
import { Link }   from 'gatsby'

/**
 * Add github, linkedin, and email icons for the blogger in the sidebar
 */
export default function BloggerInfoSocialIcons() {
  return (
    <div className="blogger-social-icons">
      <a  href      = "https://github.com/mcdaley" 
          className = "social-icon github-icon" 
          target    = "_blank" 
          rel       = "noopener noreferrer">          
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a  href      = "https://linkedin.com/in/mcdaley" 
          className = "social-icon linkedin-icon" 
          target    = "_blank" 
          rel       = "noopener noreferrer">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a  href      = "mailto:mike@mcdaley.com"
          className = "social-icon"
          rel       = "noopener noreferrer"
      >
        <i className="far fa-envelope fa-2x"></i>
      </a>
    </div>
  )
}