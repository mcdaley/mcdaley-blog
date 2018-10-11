//-----------------------------------------------------------------------------
// src/components/prev-next-post-links.js
//-----------------------------------------------------------------------------
import React          from 'react'
import { Link }       from 'gatsby'

const PrevNextPostLinks = ({ prev, next }) => {
  return (
    <nav className="nav prev-next-post-links">          
      {prev &&
          <div className="prev-post-link-container">
            <p className="prev-post-label">   
              Previous Post             
            </p>
            <Link className="nav-link prev-post-link" to={prev.frontmatter.path}>
              <h2>  {prev.frontmatter.title}  </h2>
              <p>   {prev.excerpt}            </p>
            </Link>
          </div>
      }
      {next &&
        <div className="next-post-link-container">
          <p className="next-post-label">   
            Next Post             
          </p>
          <Link className="nav-link next-post-link" to={next.frontmatter.path}>
            <h2>  {next.frontmatter.title}  </h2>
            <p>   {next.excerpt}            </p>
          </Link>
        </div>
      }
    </nav>
  )
}

export default PrevNextPostLinks