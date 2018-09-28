//-----------------------------------------------------------------------------
// src/layout/layout.js
//-----------------------------------------------------------------------------
import React      from 'react'
import { Helmet } from 'react-helmet'

import Navbar     from './navbar'
import Footer     from './footer'

const Layout = ({ children }) => {
  return ( 
    <div id="application">
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Mike Ds Awesome Blog</title>
        <link rel   = "stylesheet"
              href  = "https://fonts.googleapis.com/css?family=Roboto"
              media = "all"></link>
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
