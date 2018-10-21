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
    <div className="card mobile-blogger-info-card">
      <Img className  = "card-img" 
            fluid     = {data.backgroundMobileImage.childImageSharp.fluid} 
            alt       = "Card image" />
      <div className="mobile-blogger-info-body">
        <div className="media mobile-blogger-info rounded">
          <Img  className = "mr-3 rounded-circle align-self-top" 
                fixed     = {data.authorMobileImage.childImageSharp.fixed} />
          <div className="media-body mobile-blogger-info-media-body">
            <h4 className="mt-0" style={{color: "white"}}>&nbsp;</h4>
            <h4 className="mt-0 mobile-blogger-info-header">Mike Daley</h4>
          </div>
        </div>
      </div>
    </div>
  )
}