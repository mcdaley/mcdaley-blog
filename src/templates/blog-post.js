//-----------------------------------------------------------------------------
// src/templates/blog-post.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { Link, graphql }  from 'gatsby'

import Layout             from '../components/layout'

export default ({ data, location,  pathContext}) => {
  const post          = data.markdownRemark
  const {next, prev}  = pathContext
  console.log(`MIKED: prev`, prev)
  console.log(`MIKED: next`, next)

  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <nav className="nav prev-next-post-links">          
            {prev &&
                <Link className="nav-link prev-post-link" to={prev.frontmatter.path}>
                  <p>Previous Post</p>
                  <h5> {prev.frontmatter.title} </h5>
                </Link>
            }
            {next &&
              <Link className="nav-link next-post-link" to={next.frontmatter.path}>
                <p>Next Post</p> 
                <h5>{next.frontmatter.title}</h5>
              </Link>
            }
          </nav>
        </div>
      </div>
    </Layout>
  )
}

// GraphQL to build the page
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`