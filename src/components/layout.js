//-----------------------------------------------------------------------------
// src/layout/layout.js
//-----------------------------------------------------------------------------
import React      from 'react'
import { Helmet } from 'react-helmet'

import Navbar     from './navbar'
import Footer     from './footer'
import Favicon    from '../scss/static/favicon.ico'
import Logo16     from '../scss/static/favicon-16x16.png'
import Logo32     from '../scss/static/favicon-32x32.png'
import Logo96     from '../scss/static/favicon-96x96.png'

const Layout = ({ children }) => {
  return ( 
    <div id="application">
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Mike Ds Awesome Blog</title>
        <link rel   = "stylesheet"
              href  = "https://fonts.googleapis.com/css?family=Roboto"
              media = "all" />
        <link rel   = "logo-favicon"
              type  = "image/ico"
              href  = {`${Favicon}`} />
        <link rel   = "logo-16"
              type  = "image/png"
              sizes = "16x16"
              href  = {`${Logo16}`} />
        <link rel   = "logo-32"
              type  = "image/png"
              sizes = "32x32"
              href  = {`${Logo32}`} />
        <link rel   = "logo-96"
              type  = "image/png"
              sizes = "96x96"
              href  = {`${Logo96}`} />
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
