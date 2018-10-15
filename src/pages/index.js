//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { graphql }        from 'gatsby'

import '../scss/blooger-bootstrap.scss'
import 'bootstrap'                        // Imports Bootstrap JavaScript

import Layout             from '../components/layout'
import BloggerInfo        from '../components/blogger-info'
import MobileBloggerInfo  from '../components/mobile-blogger-info'
import BlogPosts          from '../components/blog-posts'
import SEO                from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO />

      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <BloggerInfo  data = {data} />
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="d-md-none">
            <MobileBloggerInfo data = {data} />
          </div>
          <BlogPosts    data = {data} />
        </div>
      </div>
    </Layout>
  )
}

//
// GraphQL Query for all posts and images
//

///////////////////////////////////////////////////////////////////////////////
// TODO: 09/26/2009
// -  LOOK AT MAKING THE AUTHOR IMAGE FIXED SO THAT IT DOES NOT GROW/SHRINK
//    WITH THE SCREEN.
///////////////////////////////////////////////////////////////////////////////

/* GraphQL Fragement that I can reuse in queries */
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    },
    authorImage: file(relativePath: { eq: "Mike_1970s_cartoon_005.jpg" }) {
      ...fluidImage
    },
    authorMobileImage: file(relativePath: { eq: "Mike_1970s_cartoon_005.jpg" }) {
      ...fixedImage
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
