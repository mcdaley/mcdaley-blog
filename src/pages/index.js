//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React    from 'react'
import { Link } from 'gatsby'
import '../scss/blooger-bootstrap.scss'

export default () => (
  <div style={{ color: `purple` }}>
    <Link to = '/contact/'>Contact</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>  
  </div>
)
