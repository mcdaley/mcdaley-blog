//-----------------------------------------------------------------------------
// src/components/my-skills.js
//-----------------------------------------------------------------------------
import React            from 'react'

import RailsLogo        from '../scss/static/ruby-rails-logo.svg'
import JavaScriptLogo   from '../scss/static/javascript-logo.svg'
import GatsbyLogo       from '../scss/static/gatsby-logo.svg'
import PostgreSQLLogo   from '../scss/static/postgresql-logo.svg'
import CPlusPlusLogo    from '../scss/static/iso-c-plus-plus-logo.svg'

class MySkills extends React.Component {

  constructor(props) {
    super(props)

    this.getLogo  = this.getLogo.bind(this)
    this.getImage = this.getImage.bind(this)
  }

  /**
   * Get the details needed to display the logo svg from the hash of all
   * the stored skills. If the skill.type === 'static' then the image should
   * be stored in ./src/scss/static directory, otherwise it is a fontawesome
   * icon.
   * 
   * @param {string} skill 
   */
  getLogo(skill) {
    const skills = {
      ruby_on_rails: {
        type:   "static",
        logo:   RailsLogo,
        label:  "Ruby on Rails",
      },
      postgresql: {
        type:   "static",
        logo:   PostgreSQLLogo,
        label:  "PostgreSQL",
      },
      c_plus_plus: {
        type:   "static",
        logo:   CPlusPlusLogo,
        label:  "C++",
      },
      javascript: {
        type:   "static",
        logo:   JavaScriptLogo,
        //** logo:   "fa-js-square",
        //** css:    `fab fw fa-3x mx-auto skill-icon javascript-icon`,
        label:  "JavaScript",
      },
      gatsby: {
        type:   "static",
        logo:   GatsbyLogo,
        label:  "Gatsby",
      },
      reactjs: {
        type:   "fontawesome",
        logo:   "fa-react",
        label:  "ReactJS",
        css:    `fab fw fa-3x mx-auto skill-icon`,
      },
      html5: {
        type:   "fontawesome",
        logo:   "fa-html5",
        label:  "HTML5",
        css:    `fab fw fa-3x mx-auto skill-icon`,
      },
      sass: {
        type:   "fontawesome",
        logo:   "fa-sass",
        label:  "Sass",
        css:    `fab fw fa-3x mx-auto skill-icon`,
      },
      digital_ocean: {
        type:   "fontawesome",
        logo:   "fa-digital-ocean",
        label:  "Digital Ocean",
        css:    `fab fw fa-3x mx-auto skill-icon`,
      },
      linux: {
        type:   "fontawesome",
        logo:   "fa-linux",
        label:  "Linux",
        css:    `fab fw fa-3x mx-auto skill-icon`,
      },
      sql: {
        type:   "fontawesome",
        logo:   "fa-database",
        label:  "SQL",
        css:    `fas fw fa-3x mx-auto skill-icon`,
      },
      default: {
        type:   "fontawesome",
        logo:   "fa-socks",
        label:  "Uh Oh",
        css:    `fas fw fa-3x mx-auto skill-icon`,
      }
    }

    // Get the logo from the skill, otherwise returns socks
    const  logo = skills[skill] !== undefined ? skills[skill] : skills["default"]

    return logo
  }

  getImage(skill) {
    if(skill[`type`] === 'static') {
      return (
        <img src={skill[`logo`]} height="56px" alt={skill[`label`]} />
      )
    }
    else {
      let iconStyle = `${skill[`logo`]} ${skill[`css`]}`

      return (
        <i className={iconStyle}></i>
      )
    }
  }

  render() {
    const skill = this.getLogo(this.props.skill)

    return (
      <div className="technical-skill">
      <div className="card">
        {this.getImage(skill)}
        <div className="card-body">
          <h5 className="card-title">{skill[`label`]}</h5>
        </div>
      </div>
    </div>
    )
  }
}

export default MySkills