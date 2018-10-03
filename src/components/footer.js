//-----------------------------------------------------------------------------
// src/layout/lfooter.js
//-----------------------------------------------------------------------------
import React    from 'react'
import { Link } from 'gatsby'

//** import BloggerInfoSocialIcons from './blogger-info-social-icons'

///////////////////////////////////////////////////////////////////////////////
// TODO: 09/27/2018
// -  CODE FOR THE FOOTER LINKS IS DUPLICATE OF THE BloggerInfoSocialIcons
//    EXCEPT FOR THE MARGINS AND THE LINK COLORS. SHOULD BE ABLE TO PASS IN
//    SOME PROPERTIES TO REFACTOR INTO A SINGLE COMPONENT.
///////////////////////////////////////////////////////////////////////////////

/**
 * Footer to add to the bottom of the Layout for all pages on the site
 */
export default function Footer() {
  return (
    <footer className="blog-footer">
      <div className="container-fluid row">
        <div className="col-5">
          <h5 className="blog-footer-header">Navigation</h5>
          <nav className="nav flex-column">
            <Link to = "/">         Home    </Link>
            <Link to = "/about">    About   </Link>
            <Link to = "/contact">  Contact </Link>
          </nav>
        </div>
        <div className="col-7">
          <h5 className="blog-footer-header">Michael Daley</h5>
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