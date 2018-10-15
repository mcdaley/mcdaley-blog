//-----------------------------------------------------------------------------
// src/pages/contact.js
//-----------------------------------------------------------------------------
import React    from 'react'

import Layout   from '../components/layout'
import Header   from '../components/header'
import SEO      from '../components/seo'

export default () => (
  <Layout>
    <SEO page="content" />
    <div className="row">
      <div style={{ color: `purple` }}>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </div>
    </div>
  </Layout>
)