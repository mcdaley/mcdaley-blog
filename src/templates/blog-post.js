//-----------------------------------------------------------------------------
// src/templates/blog-post.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { graphql }        from 'gatsby'

import Layout             from '../components/layout'
import PrevNextPostLink   from '../components/prev-next-post-links'
import SEO                from '../components/seo'

export default ({ data, location,  pathContext}) => {
  const post          = data.markdownRemark
  const {next, prev}  = pathContext
  console.log(`MIKED: prev`, prev)
  console.log(`MIKED: next`, next)

  return (
    <Layout>
      <SEO post={post} isBlogPost={true} />
      <div className="row">
        <div className="col-12">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <PrevNextPostLink prev={prev} next={next} />
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
        path
        date
        description
      }
    }
  }
`