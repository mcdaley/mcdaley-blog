//-----------------------------------------------------------------------------
// src/components/mobile-blogger-info.js
//-----------------------------------------------------------------------------
import React                  from 'react'
import Img                    from 'gatsby-image'

/**
 * Display blogger info at the top of the index.js on mobile screens.
 * 
 * @data {*} GraphQL data with fixed size image
 */
export default function MobileBloggerInfo({ data }) {
  return (
    <div className="media mobile-blogger-info">
      <Img  className = "mr-3 rounded-circle" 
            fixed     = {data.authorMobileImage.childImageSharp.fixed} />
      <div className="media-body">
        <h4 className="mt-0">Michael Daley</h4>
        <p className="tagline" style={{fontStyle: "italic"}}>
          Connecting the dots between product management and software development
        </p>
      </div>
    </div>
  )
}