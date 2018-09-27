//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { graphql }        from 'gatsby'
import Img                from 'gatsby-image'

import '../scss/blooger-bootstrap.scss'
import 'bootstrap'                        // Imports Bootstrap JavaScript

import Layout             from '../components/layout'
import BlogPosts          from '../components/blog-posts'
import BlogPostsHeader    from '../components/blog-posts-header'

export default ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <Img className="rounded-circle" fluid={data.imageOne.childImageSharp.fluid} />
          <h4 className="text-left" style={{ marginTop: "1.50rem"}}>Michael Daley</h4>
          <p className="tagline">
            Connecting the dots between product management and software development
          </p>
        </div>
        <div className="col-sm-12 col-md-9">
          <BlogPosts        data = { data } />
        </div>
      </div>
    </Layout>
  )
}

// GrahQL Query for all posts
export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "Mike_1970s_cartoon_005.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
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
