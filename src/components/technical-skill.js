//-----------------------------------------------------------------------------
// src/components/technical-skill.js
//-----------------------------------------------------------------------------
import React    from 'react'

const TechnicalSkill = ({icon, label}) => {
  let iconStyle = `mx-auto fab ${icon} fw fa-3x skill-icon`
  console.log(`DEBUG: Icon Style=`, iconStyle)

  return (
    <div className="technical-skill">
      <div className="card">
        <i className={iconStyle}></i>
        <div className="card-body">
          <h5 className="card-title">{label}</h5>
        </div>
      </div>
    </div>
  )
}

export default TechnicalSkill