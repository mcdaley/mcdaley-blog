//-----------------------------------------------------------------------------
// src/components/layout.js
//-----------------------------------------------------------------------------
import React                    from 'react'
import { Helmet }               from 'react-helmet'

import Navbar                   from './navbar'
import Footer                   from './footer'

const Layout = ({ children }) => {

  return ( 
    <div id="application">
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Mike Ds Awesome Blog</title>
        <link rel   = "stylesheet"
              href  = "https://fonts.googleapis.com/css?family=Roboto"
              media = "all" />
        <link rel   = "icon"
              type  = "image/png"
              sizes = "16x16"
              href  =  "/icons/favicon-16x16.png" />
        <link rel   = "icon"
              type  = "image/png"
              sizes = "32x32"
              href  = "/icons/favicon-32x32.png" />
        <link rel   = "icon"
              type  = "image/png"
              sizes = "96x96"
              href  = "/icons/favicon-96x96.png" />
      </Helmet>

      <Navbar />
      <div className="main-content container fluid">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
