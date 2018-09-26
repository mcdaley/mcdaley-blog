//-----------------------------------------------------------------------------
// src/components/blog-posts.js
//-----------------------------------------------------------------------------
import React      from 'react'
import { Link }   from 'gatsby'

export default function BlogPosts( {data} ) {
  
  return (
    <div className="blog-posts">
      {data.allMarkdownRemark.edges.map( ({ node }) => (
        <div className="post" key={node.id}>
          <div className="post-meta">{node.frontmatter.date}</div>
          <h2 className="post-title">
            <Link to={node.frontmatter.path == null ? node.fields.slug : node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p className="post-excerpt">{node.excerpt}</p>
          <Link to={node.frontmatter.path == null ? node.fields.slug : node.frontmatter.path}>
            Read
          </Link>
        </div>
      ))}
    </div>
  )
}
