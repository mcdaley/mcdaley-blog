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

class SEO extends React.Component {

  constructor(props) {
    super(props)
    this.post       = props.post        || {}
    this.isBlogPost = props.isBlogPost  || false
    this.page       = props.page        || ''

    this.getTitle       = this.getTitle.bind(this)
    this.getDescription = this.getDescription.bind(this)
    this.getUrl         = this.getUrl.bind(this)
  }

  getTitle() {
    const  title = this.isBlogPost ? this.post.frontmatter.title : Config.title
    return title
  }

  getDescription() {
    const  description = this.isBlogPost ? this.post.frontmatter.description : Config.description
    return description
  }

  getUrl() {
    const  url = this.isBlogPost ? `${Config.siteUrl}/${this.post.frontmatter.path}` : Config.siteUrl
    return url
  }

  render() {
    const title       = this.getTitle()
    const description = this.getDescription()
    const url         = this.getUrl()         

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
}

export default SEO