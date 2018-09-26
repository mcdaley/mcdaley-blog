//-----------------------------------------------------------------------------
// src/components/blog-posts.js
//-----------------------------------------------------------------------------
import React      from 'react'

export default function BlogPostsHeader({ data }) {
  return (
    <h1 style={{ paddingBottom: "1.0rem" }}>
      Dude, Blooger Home
      <span className="subtext">
        &nbsp; ({data.allMarkdownRemark.totalCount} Blog Posts)
      </span>
    </h1>
  )
}