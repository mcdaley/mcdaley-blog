//-----------------------------------------------------------------------------
// src/pages/404.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { Link }           from 'gatsby'
import { graphql }        from 'gatsby'
import Img                from 'gatsby-image'

import Layout             from '../components/layout'

export default ({data}) => (
  <Layout>
    <div className="row">
      <div className="col-12">
        <div className="error-404-container">
          <Link to = "/"> 
            <Img  className = "d-block w-100" 
                  fluid     = {data.errorImage.childImageSharp.fluid} 
                  alt       = "404 Error - Page Not Found" />
          </Link>  
        </div>
      </div>
    </div>
  </Layout>
)

//
// GraphQL for About page images
//

// Fragment for thin background images
export const fluidErrorImage = graphql`
  fragment fluidErrorImage on File {
    childImageSharp {
      fluid(maxWidth:1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const errorQuery = graphql`
  query { 
    errorImage: file(relativePath: {eq: "vintage-robot-404-error.jpg"}) {
      ...fluidErrorImage
    },
  }`
