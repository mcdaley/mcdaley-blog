//-----------------------------------------------------------------------------
// src/layout/lfooter.js
//-----------------------------------------------------------------------------
import React    from 'react'
import { Link } from 'gatsby'

import BloggerInfoSocialIcons from './blogger-info-social-icons'

export default function Footer() {
  return (
    <footer className="" style={{paddingLeft: "0.50rem", paddingBottom: "0.50rem", marginLeft: "3.0rem", marginRight: "3.0rem" }}>
      <div className="container-fluid row">
        <div className="col-5">
          <h5 style={{marginTop: "1.5rem"}}>Navigation</h5>
          <nav class="nav flex-column">
            <Link to = "/">         Home    </Link>
            <Link to = "/about">    About   </Link>
            <Link to = "/contact">  Contact </Link>
          </nav>
        </div>
        <div className="col-7">
          <h5 className="navbar-brand" style={{marginTop: "1.0rem"}}>Michael Daley</h5>
          <div>
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
            <Link to="/contact" className="social-icon">
              <i className="far fa-envelope fa-2x"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}