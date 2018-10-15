//-----------------------------------------------------------------------------
// src/components/seo.js
//-----------------------------------------------------------------------------
import React        from 'react'
import Helmet       from 'react-helmet'

import Config       from '../config/blooger-config'

///////////////////////////////////////////////////////////////////////////////
// TODO: 10/13/2018
// -  ADD <tags> TO THE HEADER. THIS WILL MOST LIKELY BE NULL, SO I HAVE TO
//    ADD LOGIC TO NOT ADD TO HEADER IF UNDEFINED
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
   * will be in the markdown header and for pages the title will be in the
   * Config component
   */
  getTitle() {
    let title       = ''
    let pageConfig  = Config.pages[this.page] || {}

    if(this.isBlogPost) {
      title = this.post.frontmatter.title
    }
    else {
     title = pageConfig.title || Config.title
    }
    
    return title
  }

  /**
   * Determined the description tag for the page header. For blog posts the 
   * description will be in the markdown header. If the description field is
   * not in the header it will use the excerpt from the post. For pages the 
   * title will be in the Config component
   */
  getDescription() {  
    let description = ''
    let pageConfig  = Config.pages[this.page] || {}
    
    if( this.isBlogPost) {
      description = this.post.frontmatter.description || this.post.excerpt
    }
    else {
      description = pageConfig.description || Config.description
    }
    
    return description
  }

  /**
   * Determine the url tag for the page header. For blog posts it will be in
   * the header for the markdown file and for pages it will be in the 
   * Config component.
   */
  getUrl() {
    let url         = ''
    let pageConfig  = Config.pages[this.page] || {}

    if(this.isBlogPost) {
      url = `${Config.siteUrl}/${this.post.frontmatter.path}`
    }
    else {
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