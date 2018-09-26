//-----------------------------------------------------------------------------
// src/pages/contact.js
//-----------------------------------------------------------------------------
import React    from 'react'

import Layout   from '../components/layout'
import Header   from '../components/header'

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  </Layout>
)