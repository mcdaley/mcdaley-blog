//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { Link, graphql }  from 'gatsby'

import '../scss/blooger-bootstrap.scss'
import 'bootstrap'                        // Imports Bootstrap JavaScript

import Layout             from '../layouts/layout'

export default ({ data }) => (
  <Layout>
    <div>
      <h1 style={{ paddingBottom: "1.0rem" }}>
        Blooger Home
        <span className="subtext">
          &nbsp; ({data.allMarkdownRemark.totalCount} Blog Posts)
        </span>
      </h1>
      
      {data.allMarkdownRemark.edges.map( ({ node }) => (
        <div className="post" key={node.id}>
          <div className="post-meta">{node.frontmatter.date}</div>
          <h2 className="post-title">
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p className="post-excerpt">{node.excerpt}</p>
          <Link to={node.fields.slug}>Read</Link>
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
