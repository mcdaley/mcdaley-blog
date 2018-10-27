//-----------------------------------------------------------------------------
// src/components/blogger-info.js
//-----------------------------------------------------------------------------
import React                  from 'react'
import Img                    from 'gatsby-image'

import BloggerInfoSocialIcons from '../components/blogger-info-social-icons'

export default function BloggerInfo({ data }) {
  return (
    <div className="blogger-info">
      <Img className="rounded-circle" fluid={data.authorImage.childImageSharp.fluid} />
      <h4 className="text-left" style={{ marginTop: "1.50rem"}}>Mike Daley</h4>
      <p className="tagline">
        Connecting the dots between product management and software development
      </p>
      <BloggerInfoSocialIcons />
    </div>
  )
}