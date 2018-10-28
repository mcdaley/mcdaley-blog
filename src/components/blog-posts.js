//-----------------------------------------------------------------------------
// src/components/blog-posts.js
//-----------------------------------------------------------------------------
import React      from 'react'
import { Link }   from 'gatsby'

export default function BlogPosts( {data} ) {

  function getImage(node) {
    const  image =  node.frontmatter.cover == null 
                    ? "icons/favicon-96x96.png" 
                    : node.frontmatter.cover.publicURL
    return image
  }
  
  return (
    <div className="blog-posts">
      {data.allMarkdownRemark.edges.map( ({ node }) => (
        <div className="media">
          <img  className = "align-self-start mr-3" 
                src       = {getImage(node)}
                width     = "80px"
                height    = "80px"
                alt       = "Hello World"
          >
          </img>
          <div className="media-body">
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
          </div>
        </div>    
      ))}
    </div>
  )
}
