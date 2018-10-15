//-----------------------------------------------------------------------------
// src/components/seo.js
//-----------------------------------------------------------------------------
import React        from 'react'
import Helmet       from 'react-helmet'

import Config       from '../config/blooger-config'

///////////////////////////////////////////////////////////////////////////////
// TODO: 10/13/2018
// [x] -  REFACTOR BlogPostTemplate OUT OF BlogPost SO THAT I CAN DECONSTRUCT
//        THE PARAMETERS PASSED TO SEO
//    * NEED TO FIGURE OUT THE PARAMS THAT I NEED.
// -  FOR BLOG POSTS IF "DESCRIPTION" IS NOT DEFINED THEN USE THE "EXCERPT"
// [x] -  FIGURE OUT THE var x = a.title || b.title WHEN a = {} 
// [x] -  FIGURE OUT HOW TO PASS IN TITLE, DESCRIPTION, AND URL PATH FOR "/about"
//        AND "/content" PAGES W/ CURRENT SETUP. PROBABLY WANT TO ADD PARSING
//        LOGIC TO THE Config COMPONENT.
// [x] -  BUILD CORRECT URL FOR /about AND /content PAGES
// -  ADD IMAGE TO TOP OF BLOG POSTS AND ADD TO THE SEO
// -  ADD THE "schemaOrgJSONLD" TO SEO COMPONENT
// -  CAN I CHANGE THE <title> in <head> FOR EVERY PAGE?
///////////////////////////////////////////////////////////////////////////////

class SEO extends React.Component {

  constructor(props) {
    super(props)
    this.post           = props.post        || {}
    this.isBlogPost     = props.isBlogPost  || false
    this.page           = props.page        || ''

    this.getTitle       = this.getTitle.bind(this)
    this.getDescription = this.getDescription.bind(this)
    this.getUrl         = this.getUrl.bind(this)
  }

  /**
   * Determine the title tag for the page header. For blog posts the title
   * will be in the markdown header.
   */
  getTitle() {
    let title       = ''
    let pageConfig  = Config.pages[this.page] || {}

    if(this.isBlogPost) {
      title = this.post.frontmatter.title
    }
    else {
      /**
            if(this.page === '' || !pageConfig.title) {
              title = Config.title
            }
            else {
              title = pageConfig.title
            }
      */
     title = pageConfig.title || Config.title
    }
    
    return title
  }

  /**
   * Determined the description tag for the page header. For blog posts the 
   * description will be in the markdown header. If the description field is
   * not in the header it will use the excerpt from the post.
   */
  getDescription() {  
    let description = ''
    let pageConfig  = Config.pages[this.page] || {}
    
    if( this.isBlogPost) {
      description = this.post.frontmatter.description || this.post.excerpt
    }
    else {
      /** 
            if(this.page === '' || !pageConfig.description) {
              description = Config.description
            }
            else {
              description = pageConfig.description
            }
      */
     description = pageConfig.description || Config.description
    }
    //** console.log(`SEO Description= `, description)
    return description
  }

  /**
   * Determine the url tag for the page header.
   */
  getUrl() {
    let url         = ''
    let pageConfig  = Config.pages[this.page] || {}

    if(this.isBlogPost) {
      url = `${Config.siteUrl}/${this.post.frontmatter.path}`
    }
    else {
      /** 
            if(this.page === '' || !pageConfig.url) {
              url = Config.siteUrl
            }
            else {
              url = pageConfig.url
            }
      */
      url = pageConfig.url || Config.siteUrl
    }

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