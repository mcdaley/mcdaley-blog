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
// [x] -  ADD THE "schemaOrgJSONLD" TO SEO COMPONENT
// -  CAN I CHANGE THE <title> in <head> FOR EVERY PAGE?
///////////////////////////////////////////////////////////////////////////////

class SEO extends React.Component {

  constructor(props) {
    super(props)
    this.post               = props.post        || {}
    this.isBlogPost         = props.isBlogPost  || false
    this.page               = props.page        || ''

    this.getTitle           = this.getTitle.bind(this)
    this.getDescription     = this.getDescription.bind(this)
    this.getUrl             = this.getUrl.bind(this)
    this.getDatePublished   = this.getDatePublished.bind(this)
    this.getSchemaOrgJSONLD = this.getSchemaOrgJSONLD.bind(this)
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
      title = `${Config.baseUrl}: ${this.post.frontmatter.title}`
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

  /**
   * Determine the date the blog post was published
   */
  getDatePublished() {
    ///////////////////////////////////////////////////////////////////////////
    // TODO: 10/15/2018
    // -  NEED TO GET THE DATE PUBLISHED FROM THE CURRENT DATE IF THE 
    //    MARKDOWN HEADER DOES NOT HAVE A DATE DEFINED.
    ///////////////////////////////////////////////////////////////////////////
    const  datePublished = this.isBlogPost ? this.post.frontmatter.date : "2018-09-17"
    return datePublished
  }

  /**
   * Build the JSON-LD to as a <script> in the <head>. To validate the JSON-LD 
   * structure copy and past the contents of the <script type="application/ld+json">
   * tag in the Google structured data languate tool at:
   * 
   *  https://search.google.com/structured-data/testing-tool/u/0/
   * 
   * @param {*} title 
   * @param {*} url 
   * @param {*} description 
   */
  getSchemaOrgJSONLD(title, url, description) {

    //
    // Define structure of the page using schema.org
    //
    const schemaOrgJSONLD = [
      {
        '@context':     'https://schema.org',
        '@type':        'WebSite',
        url,
        name:           title,
        alternateName:  Config.title,
      },
    ]

    return this.isBlogPost
      ? [
          ...schemaOrgJSONLD,
          {
            '@context':       'https://schema.org',
            '@type':          'BreadcrumbList',
            itemListElement:  [
              {
                '@type':    'ListItem',
                position:   1,
                item: {
                  '@id':    url,
                  name:     title,
                },
              },
            ],
          },
          {
            '@context':       'https://schema.org',
            '@type':          'BlogPosting',
            url,
            name:             title,
            headLine:         title,
            datePublished:    this.getDatePublished(),
            description,
            image:            {
              '@type':        'ImageObject',
              url:            Config.logo,
            },
            author: {
              '@type':        'Person',
              name:           'Mike Daley',
            },
            publisher: {
              '@type':        'Organization',
              url:            'https://mcdaley.com',
              name:           'Mike Daley',
              logo:           {
                '@type':      'ImageObject',
                url:          Config.logo,
              },
            },
            mainEntityOfPage: {
              '@type':        'WebSite',
              '@id':          Config.siteUrl,
            },
          }
        ]
      : schemaOrgJSONLD
  }

  render() {
    const title       = this.getTitle()
    const description = this.getDescription()
    const url         = this.getUrl()     

    return(
      <Helmet>
        {/* Page Title */}
        <title>{title}</title>

        {/* General tags */}
        <meta name="description"  content = {description} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify( this.getSchemaOrgJSONLD(title, description, url) )}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:title" content = {title} />
        <meta property="og:url"   content = {url} />
        {this.isBlogPost ? <meta property="og:type" content="article" /> : null}
      </Helmet> 
    )
  }
}

export default SEO