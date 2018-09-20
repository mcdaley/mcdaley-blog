//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React        from 'react'
import { graphql }  from 'gatsby'

import '../scss/blooger-bootstrap.scss'
import 'bootstrap'                        // Imports Bootstrap JavaScript

import Layout   from '../layouts/layout'

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Blooger Home</h1>
      <h4>{data.allMarkdownRemark.totalCount} Blog Posts</h4>
      {data.allMarkdownRemark.edges.map( ({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title} 
            <span className="subtext"> - {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

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
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
