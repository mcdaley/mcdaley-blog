//-----------------------------------------------------------------------------
// src/pages/about.js
//-----------------------------------------------------------------------------
import React          from 'react'

import Layout         from '../components/layout'
import Header         from '../components/header'
import TechnicalSkill from '../components/technical-skill'

export default () => (
  <Layout>
    <div>
      <Header headerText = 'About Mike Daley' />
      <p>
        My name is Mike Daley and I am a Product Manager and Software Engineer 
        living in San Francisco with a track record of delivering successful 
        web and mobile experiences. 
      </p>
      <p>  
        As a Product Manager and Software Developer, I have launched real-time 
        trading applications, online SaaS consumer products, and a P2P Payments 
        Platform. I have worked at startups, mid-market, and Fortune 500 companies and 
        I have used waterfall, scrumfall, and agile development methodologies to 
        design and build successful UIs and server-side applications.
      </p>
      <p>
        From my diverse experiences, I want to provide readers insight on how 
        to build great products by creating a product vision, aligning 
        cross-functional teams, and implementing a sustainable development process.
      </p>

      <p>
        I am always interested in new challenges. Reach out to me at &nbsp;
        <a href="mailto://mike@mcdaley.com">mike@mcdaley.com</a> to connect.
      </p>

      <hr />
      <h2>Technical Skills</h2>
        <ul style={{color: "red"}}>
          <li>
            NEED TO ADD IMAGES FOR RUBY ON RAILS AND POSTGRESQL AND REMOVE 
            DUPLICATE JavaScript
          </li>
          <li>
            Look at adding a background image with code embedded in it.
          </li>
        </ul>
    
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fa-js-square"     label="JavaScript"/>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fa-react"         label="ReactJS"/>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fas fa-database"  label="SQL"/>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fa-html5"         label="HTML5"/>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fab fa-linux"     label="Linux"/>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fab fa-sass"      label="Sass"/>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fab fa-digital-ocean"   label="Digital Ocean"/>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <TechnicalSkill icon="fa-js-square"     label="JavaScript"/>
        </div>
      </div>

      <hr />
      <h2>Blog Ideas</h2>
      <p>
        List my first 5 blog ideas so that I can form a picture about
        what I am trying to communicate in my blog.
      </p>
      <ul>
        <li>Strategy</li>
        <li>Opportunity Cost (Technical Debt) - only refactor code as new stories affect it</li>
        <li>Basic Math for Architectures - Minimum Viable Architecure - Do not know all business rules</li>
        <li>User personas</li>
        <li>Always be user driven (on the phone call change list)</li>
        <li>Writing stories aligned to developer flows</li>
        <li>Sprint Deliverables</li>
      </ul>
    </div>
  </Layout>
)