//-----------------------------------------------------------------------------
// src/pages/about.js
//-----------------------------------------------------------------------------
import React    from 'react'

import Layout   from '../components/layout'
import Header   from '../components/header'

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText = 'About' />
      <p>Learn more about me</p>
    </div>
  </Layout>
)