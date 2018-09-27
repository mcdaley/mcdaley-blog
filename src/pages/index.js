//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { graphql }        from 'gatsby'

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
          <h4 className="text-left">Michael Daley</h4>
        </div>
        <div className="col-sm-12 col-md-9">
          <BlogPostsHeader  data = { data } />
          <BlogPosts        data = { data } />
        </div>
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
