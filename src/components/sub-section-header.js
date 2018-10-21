//-----------------------------------------------------------------------------
// src/components/sub-section-header.js
//-----------------------------------------------------------------------------
import React from 'react'

const SubSectionHeader = ({ label }) => {

  return (
    <div className="sub-section-header">
      <div className="section-header-content rounded">
        <h2 className="section-header-title">{label}</h2>
      </div>
    </div>
  )
}

export default SubSectionHeader