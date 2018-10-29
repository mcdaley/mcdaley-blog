//-----------------------------------------------------------------------------
// src/components/my-skills.js
//-----------------------------------------------------------------------------
import React            from 'react'

import MySkills         from './my-skills'

const MySkillsList = () => {
  return (
    <div className="technical-skills">
      <h2 className="about-page-h2">Technical Skills</h2>
      
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="ruby_on_rails" />
        </div> 
        <div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="javascript" />
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="reactjs" />
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="html5" />
        </div>
      </div>
      <div className="row">
        < div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="postgresql" />
        </div>
        < div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="sass" />
        </div>
        < div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="digital_ocean" />
        </div>
        < div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="linux" />
        </div>
      </div>
      <div className="row">
        < div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="sql" />
        </div>
        < div className="col-6 col-sm-6 col-md-3">
          <MySkills skill="c_plus_plus" />
        </div>
        < div className="col-6 col-sm-6 col-md-3">
          &nbsp;
        </div>
        < div className="col-6 col-sm-6 col-md-3">
          &nbsp;
        </div>
      </div>
    </div>
  )
}

export default MySkillsList