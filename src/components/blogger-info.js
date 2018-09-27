//-----------------------------------------------------------------------------
// src/components/blogger-info.js
//-----------------------------------------------------------------------------
import React      from 'react'
import { Link }   from 'gatsby'
import Img        from 'gatsby-image'

export default function BloggerInfo({ data }) {
  return (
    <div className="blogger-info">
      <Img className="rounded-circle" fluid={data.authorImage.childImageSharp.fluid} />
      <h4 className="text-left" style={{ marginTop: "1.50rem"}}>Michael Daley</h4>
      <p className="tagline">
        Connecting the dots between product management and software development
      </p>
      <p>
        <a href="https://github.com/mcdaley" className="social-icon" target="_blank" rel="noopener noreferrer">          
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/mcdaley" className="social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <Link to="/contact" className="social-icon">
          <i className="far fa-envelope fa-2x"></i>
        </Link>
      </p>
    </div>
  )
}