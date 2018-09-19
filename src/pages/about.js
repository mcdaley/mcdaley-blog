//-----------------------------------------------------------------------------
// src/pages/about.js
//-----------------------------------------------------------------------------
import React    from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText = 'Dude, About Gatsby' />
    <Header headerText = 'This is pretty cool' />
    <p>Such wow. Very React.</p>
  </div>
)