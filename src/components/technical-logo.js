//-----------------------------------------------------------------------------
// src/components/technical-logo.js
//-----------------------------------------------------------------------------
import React    from 'react'

const TechnicalLogo = ({logo, label}) => {
  return (
    <div className="technical-skill">
      <div className="card">
        <img src={logo} height="56px" alt="" />
        <div className="card-body">
          <h5 className="card-title">{label}</h5>
        </div>
      </div>
    </div>
  )
}

export default TechnicalLogo