//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React    from 'react'

import '../scss/blooger-bootstrap.scss'
import 'bootstrap'                        // Imports Bootstrap JavaScript

import Layout   from '../layouts/layout'

export default () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <p>Welcome to Blooger</p>  
    </div>
  </Layout>
)
