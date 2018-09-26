//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { graphql }        from 'gatsby'

import '../scss/blooger-bootstrap.scss'
import 'bootstrap'                        // Imports Bootstrap JavaScript

import Layout             from '../components/layout'
import BlogPosts          from '../components/blog-posts'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1 style={{ paddingBottom: "1.0rem" }}>
          Blooger Home
          <span className="subtext">
            &nbsp; ({data.allMarkdownRemark.totalCount} Blog Posts)
          </span>
        </h1>

        <BlogPosts data = { data } />
      </div>
    </Layout>
  )
}

// GrahQL Query for all posts
export const query = graphql`
  query {
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
