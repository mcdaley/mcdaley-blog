//-----------------------------------------------------------------------------
// src/components/prev-next-post-links.js
//-----------------------------------------------------------------------------
import React          from 'react'
import { Link }       from 'gatsby'

const PrevNextPostLinks = ({ prev, next }) => {
  return (
    <nav className="nav prev-next-post-links">          
      {prev &&
          <Link className="nav-link prev-post-link" to={prev.frontmatter.path}>
            <p>   Previous Post             </p>
            <h5>  {prev.frontmatter.title}  </h5>
            <p>   {prev.excerpt}            </p>
          </Link>
      }
      {next &&
        <Link className="nav-link next-post-link" to={next.frontmatter.path}>
          <p>   Next Post                 </p> 
          <h5>  {next.frontmatter.title}  </h5>
          <p>   {next.excerpt}            </p>
        </Link>
      }
    </nav>
  )
}

export default PrevNextPostLinks