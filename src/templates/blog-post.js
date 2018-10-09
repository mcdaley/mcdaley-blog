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
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="postLinks">
          <p>
            {prev &&
              <Link to={prev.frontmatter.path}>
                Previous: {prev.frontmatter.title}
              </Link>
            }
          </p>
          <p>
            {next &&
              <Link to={next.frontmatter.path}>
                Next: {next.frontmatter.title}
              </Link>}
          </p>
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