//-----------------------------------------------------------------------------
// src/components/seo.js
//-----------------------------------------------------------------------------
import React        from 'react'
import Helmet       from 'react-helmet'

import Config       from '../config/blooger-config'

///////////////////////////////////////////////////////////////////////////////
// TODO: 10/13/2018
// -  REFACTOR BlogPostTemplate OUT OF BlogPost SO THAT I CAN DECONSTRUCT
//    THE PARAMETERS PASSED TO SEO
//    * NEED TO FIGURE OUT THE PARAMS THAT I NEED.
// -  FOR BLOG POSTS IF "DESCRIPTION" IS NOT DEFINED THEN USE THE "EXCERPT"
// -  FIGURE OUT THE var x = a.title || b.title WHEN a = {} 
// -  FIGURE OUT HOW TO PASS IN TITLE, DESCRIPTION, AND URL PATH FOR "/about"
//    AND "/content" PAGES W/ CURRENT SETUP. PROBABLY WANT TO ADD PARSING
//    LOGIC TO THE Config COMPONENT.
// -  BUILD CORRECT URL FOR /about AND /content PAGES
// -  ADD IMAGE TO TOP OF BLOG POSTS AND ADD TO THE SEO
// -  ADD THE "schemaOrgJSONLD" TO SEO COMPONENT
// -  CAN I CHANGE THE <title> in <head> FOR EVERY PAGE?
///////////////////////////////////////////////////////////////////////////////

const SEO = ({ post, isBlogPost=false, page='' }) => {
  //let postMeta  = post || {}
  //let siteMeta  = site || {}

  const title       = isBlogPost ? post.frontmatter.title       : Config.title
  const description = isBlogPost ? post.frontmatter.description : Config.description
  const url         = isBlogPost ? `${Config.siteUrl}/${post.frontmatter.path}` : Config.siteUrl

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