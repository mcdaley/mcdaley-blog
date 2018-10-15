//-----------------------------------------------------------------------------
// src/templates/blog-post.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { graphql }        from 'gatsby'

import Layout             from '../components/layout'
import PrevNextPostLink   from '../components/prev-next-post-links'
import SEO                from '../components/seo'

///////////////////////////////////////////////////////////////////////////////
// TODO: 10/15/2018
//
// SEO FIELDS
// -  <title>     : page title
// -  description : blog/page description or excerpt
// -  og:title    : blog/page title
// -  og:url      : full url to the page/post
// -  image       : top image for a blog post (NEED TO ADD TO BLOG POST HEADER)
// -  tags        : list of tags in blog header (NEED TO ADD TO BLOG POST HEADER)
// -  category    : blog post categories
///////////////////////////////////////////////////////////////////////////////

export default ({ data, location,  pathContext}) => {
  const post          = data.markdownRemark
  const {next, prev}  = pathContext
  console.log(`MIKED: post`, post)

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
      excerpt
    }
  }
`