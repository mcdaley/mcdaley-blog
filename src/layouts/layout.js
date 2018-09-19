//-----------------------------------------------------------------------------
// src/layout/layout.js
//-----------------------------------------------------------------------------
import React    from 'react'

import Navbar   from '../components/navbar'

const Layout = ({ children }) => {
  return (
    <div id="root" className="container fluid">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
