//-----------------------------------------------------------------------------
// src/layout/layout.js
//-----------------------------------------------------------------------------
import React    from 'react'

import Navbar   from '../components/navbar'

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Navbar />
      <div className="main-content container fluid">
        {children}
      </div>
    </div>
  )
}

export default Layout
