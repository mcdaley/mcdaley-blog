//-----------------------------------------------------------------------------
// src/components/resume.js
//-----------------------------------------------------------------------------
import React              from 'react'


const Resume = () => {
  return (
    <div className="resume">
    
      <h1 className="about-page-h2">Background</h1>
      { /* CareerQB */ }
      <div className="media job-snippet">
        <img  className = "mr-3" 
              src       = "/logos/careerqb-logo.png" 
              alt       = "CareerQB Logo"
              width     = "64px"
              height    = "64px"
        />
        <div className="media-body">
          <h4 className="mt-0">Vice President Product Management and Founder</h4>
          <h5 className="mt-0">CareerQB</h5>
          Founder of CareerQB.com a startup that streamlines users’ job 
          search by aggregating job search results from multiple job search 
          sites and by providing productivity tools to help users organize 
          their job search.
        </div>
      </div>

      { /* Early Warning Services */ }
      <div className="media">
        <img  className = "mr-3" 
              src       = "/logos/ews-logo.png" 
              alt       = "Zelle - EWS Logo"
              width     = "64px"
              height    = "64px"
        />
        <div className="media-body job-snippet">
          <h4 className="mt-0">Director Product Management</h4>
          <h5 className="mt-0">Zelle - Early Warning Services</h5>
          Early Warning Services, LLC provides mobile payment and risk 
          solutions to financial institutions. Member of the business 
          leadership team that launched Zelle, a P2P Payment Service 
          that has processed more than $120B in P2P payments.
        </div>
      </div>

      { /* Thomson Reuters */ }
      <div className="media">
        <img  className = "mr-3" 
              src       = "/logos/thomson-reuters-logo.png" 
              alt       = "Thomson Reuters Logo"
              width     = "64px"
              height    = "64px"
        />
        <div className="media-body job-snippet">
          <h4 className="mt-0">Product Management</h4>
          <h5 className="mt-0">Thomson Reuters</h5>
          Responsible for launching Thomson Reuters’ Portfolio Analytics for 
          Eikon, an online SaaS application for Investment Managers.
        </div>
      </div>

      { /* Yodlee */ }
      <div className="media">
        <img  className = "mr-3" 
              src       = "/logos/yodlee-logo.png" 
              alt       = "Yodlee Logo"
              width     = "64px"
              height    = "64px"
        />
        <div className="media-body job-snippet">
          <h4 className="mt-0">Product Management</h4>
          <h5 className="mt-0">Yodlee</h5>
          Responsible for Yodlee Personal Finance Management (PFM), an 
          online SaaS application that provides online personal finance 
          tools to 3.5M customers at over 20 financial institutions. 
        </div>
      </div>
    </div>
  )
}

export default Resume