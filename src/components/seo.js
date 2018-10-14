//-----------------------------------------------------------------------------
// src/components/seo.js
//-----------------------------------------------------------------------------
import React      from 'react'
import Helmet     from 'react-helmet'

const SEO = ({ post, site, isBlogPost = true }) => {
  //let postMeta  = post || {}
  //let siteMeta  = site || {}

  console.log(`SEO: `, site )

  const title       = isBlogPost ? post.frontmatter.title       : site.siteMetadata.title
  const description = isBlogPost ? post.frontmatter.description : site.siteMetadata.description
  const url         = isBlogPost ? post.frontmatter.path        : site.siteMetadata.url

  return(
    <Helmet>
      {/* General tags */}
      <meta name="description"  content = {description} />

      {/* OpenGraph tags */}
      <meta property="og:title" content = {title} />
      <meta property="og:url"   content = {url} />
    </Helmet> 
  )
}

export default SEO