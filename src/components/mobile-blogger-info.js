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
    <div className="card" style={{border: "none"}}>
      <Img className  = "card-img" 
            fluid     = {data.backgroundMobileImage.childImageSharp.fluid} 
            alt       = "Card image" />
      <div className="" style={{marginTop: "-3.0rem"}}>
        <div className="media mobile-blogger-info rounded" 
              style={{backgroundColor: "#0024D6", padding: "1.00rem", paddingBottom: "0.25rem", marginRight: "2.0rem", marginLeft: "2.0rem"}}>
          <Img  className = "mr-3 rounded-circle align-self-top" 
                fixed     = {data.authorMobileImage.childImageSharp.fixed} />
          <div className="media-body" style={{zIndex: "400", paddingTop: "2.0rem;"}}>
            <h4 className="mt-0" style={{color: "white"}}>&nbsp;</h4>
            <p className="tagline" style={{fontStyle: "", color: "white"}}>
              <h4 className="mt-0" style={{color: "white", paddingTop: "0.30rem"}}>Mike Daley</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}