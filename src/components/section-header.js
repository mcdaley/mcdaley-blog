//-----------------------------------------------------------------------------
// src/components/section-header.js
//-----------------------------------------------------------------------------
import React from 'react'

const SectionHeader = ({ label, fluidImage }) => {

  return (
    <div className="section-header">
      <div className="section-header-content rounded">
        <h1 className="section-header-title">{label}</h1>
      </div>
    </div>
  )
}

export default SectionHeader