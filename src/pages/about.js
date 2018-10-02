//-----------------------------------------------------------------------------
// src/pages/about.js
//-----------------------------------------------------------------------------
import React    from 'react'

import Layout   from '../components/layout'
import Header   from '../components/header'

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

      <h2>Technical Skills</h2>
      <p>Should I break into buckets such as Server, Databases, Front End?</p>
      <ul>
        <li>Ruby on Rails</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Bootstrap</li>
        <li>PostgreSQL</li>
        <li>SQL</li>
        <li>ReactJS</li>
        <li>Bash Shell</li>
      </ul>

      <hr />

      <p>Learn more about me</p>
      <h2>Blog Ideas</h2>
      <p>
        List my first 5 blog ideas so that I can form a picture about
        what I am trying to communicate in my blog.
        <ul>
          <li>Strategy</li>
          <li>Opportunity Cost (Technical Debt) - only refactor code as new stories affect it</li>
          <li>Basic Math for Architectures - Minimum Viable Architecure - Do not know all business rules</li>
          <li>User personas</li>
          <li>Always be user driven (on the phone call change list)</li>
          <li>Writing stories aligned to developer flows</li>
          <li>Sprint Deliverables</li>
        </ul>
      </p>
      <h2>Who?</h2>
      <p>
        My About Me page needs to tell my readers who I am and why that 
        matters. When people see that I have years of experience it translates
        into more credibility. <b>Define who the blog is for</b>
        <ul>
          <li>Product manager experience</li>
          <li>Software developer experience</li>
          <li>Methodologies: Waterfall to Agile</li>
        </ul>
      </p>
      <h2>What?</h2>
      <p>
        It's super important that my about page tells me readers exactly what 
        I'm about. <i>Trying to fill the disconnect in organizations between 
        product managment and engineering.
        </i>
      </p>
      <p>
        <b>Getting PMs and Developers working together more efficiently</b>
      </p>
      <h2>Why?</h2>
      <p>
        I want my readers to understand my stake in this process, and understand
        that I want to provide actionable advice.
      </p>
      <p>
        <b><i>Learn how to design, code, and deliver better products faster!</i></b>
      </p>
      <p>
        Unique perspective on building better products faster in real world 
        organizations. 
        
        It's great to read about the best practices and processes, however 
        real world organizations are more complex (highly matrixed) to navigate 
        and it's extremely difficult to practice agile methodologies 
      </p>
      <p>
        From my experiences as a Software Engineer building real-time trading 
        applications and as a Product Manager, the blog postings will provide 
        insights on how to build <i>better</i> products faster.
      </p>

      <h4>Article for how to write and about me page</h4>
      <p><b>Make it more touchy-feely, I live in San Francisco enjoy ...</b></p>
      <p>
        I am an experienced Product Manager and Software Developer with a
        track record of delivering successful web and mobile experiences by 
        leading customer driven cross-functional agile design and development 
        teams in startup, mid-market, and large organizations.
      </p>
      <p>
        Also, I am passionate about learning new technologies and how to apply
        them to solve real world problems. Currently, I am studying ReactJS and 
        reading <b>Data Science from Scratch</b>. 
        
        <h4>On right track - needs cleanup</h4>
        I consider myself a <i>forever student</i> and I am fueled by my passion
        to keep up to date with the latest technologies, currently ReactJS and Data Science, 
        to leverage my experience as a Product Manager and Software Developer to
        seek better methodologies for succssfully building great products 
        in real world organizations.
        
        I believe it is important
        to keep learning and developing new skills....
        
        <h5>How do I link learning to experience to building great products in the real world</h5>
        
         my experience as a Product Manager and a Software 
        Developer to build great products in the real world.
      </p>
      <h2>Skills</h2>
      <p>List of icons with technical skills</p>
      <h2>Background</h2>
      <p>Overview of LinkedIn Profile</p>

      <p><b>
        My experience has tought me that while all of the literature about agile
        development is great and makes sense - in the real world it is next to impossible
        to implement. My objective is to cut through the jargon and write about 
        how to create great products in the real world.
        </b></p>
      <p>
        <strike>
          My experience as a Product Manager and Software Developer provides me with insight 
          on how both sides think, work, and expectations and how to improve the product 
          development lifecycle.
        </strike>
      </p>
    </div>
  </Layout>
)