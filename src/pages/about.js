//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { graphql }        from 'gatsby'
import Img                from 'gatsby-image'

import Layout             from '../components/layout'
import Resume             from '../components/resume'
import MySkillsList       from '../components/my-skills-list.js'
import SEO                from '../components/seo'
import SectionHeader      from '../components/section-header'
import SubSectionHeader   from '../components/sub-section-header'

export default ({ data }) => (
  <Layout>
    <SEO page="about" />

    <div className="row" style={{marginBottom: "3.00rem"}}>
      <div className="col-12">
        {/* <h1>About Mike Daley</h1> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Img className="d-block w-100" fluid={data.robotImage.childImageSharp.fluid} alt="Hello" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>Hello, I'm Mike Daley.</h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>Hello, I'm Mike Daley.</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Img className="d-block w-100" fluid={data.pmImage.childImageSharp.fluid} alt="Product Management" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>For work, I build products</h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>For work, I build products</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Img className="d-block w-100" fluid={data.codeImage.childImageSharp.fluid} alt="Software Engineer" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>and I do some coding.</h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>and I do some coding.</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Img className="d-block w-100" fluid={data.sfImage.childImageSharp.fluid} alt="San Francisco" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>I live in San Francisco.</h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>I live in San Francisco.</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Img className="d-block w-100" fluid={data.hawaiiImage.childImageSharp.fluid} alt="Hawaii Vacation" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>When not working, I enjoy spending time with my family,... </h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>When not working, I enjoy spending time with my family,...</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Img className="d-block w-100" fluid={data.machuPichuImage.childImageSharp.fluid} alt="Ski Vacation" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>traveling,...</h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>traveling,...</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Img className="d-block w-100" fluid={data.soccerImage.childImageSharp.fluid} alt="Playing Soccer" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>and going to my son's games.</h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>and going to my son's games.</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Img className="d-block w-100" fluid={data.poolImage.childImageSharp.fluid} alt="Swimming" />
              <div className="carousel-caption-top d-none d-sm-block">
                <div className="carousel-caption-content rounded">
                  <h5>I stay active by swimming, running, and playing tennis.</h5>
                </div>
              </div>
              <div className="carousel-caption d-block d-sm-none">
                <div className="carousel-caption-content rounded">
                  <h5>I stay active by swimming, running, and playing tennis.</h5>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    { /* Short Resume */ }
    <div className="row">
      <div className="col-12">
        <Resume />
      </div>
    </div>

    { /* Technical Skills */ }
    <div className="row">
      <div className="col-12">
        <MySkillsList />
      </div>
    </div>
    
    <div className="row">
      { /** 
          <h2 style={{color: "red", marginTop: "2.00rem"}}>Old About Mike</h2>
          <p>
            My name is Mike Daley and I am a Product Manager and Software Engineer 
            living in San Francisco with a track record of delivering successful 
            web and mobile experiences by defining winning strategies, acting as 
            the business owner, and leading customer driven cross-functional 
            agile design and development teams in startup, mid-market, and 
            large organizations. 
          </p>
          <p>
            From my diverse experiences as a Product Manager and Software Engineer, 
            I want to provide readers insight on how to build great products by 
            creating a product vision, aligning cross-functional teams, and 
            implementing a sustainable development process.
          </p>

          <p>
            I am always interested in new challenges. Reach out to me at &nbsp;
            <a href="mailto://mike@mcdaley.com">mike@mcdaley.com</a> to connect.
          </p>
          <hr />
      */ }
    </div>
        
  </Layout>
)

//
// GraphQL for About page images
//

// Fragment for thin background images
export const fluidAboutImage = graphql`
  fragment fluidAboutImage on File {
    childImageSharp {
      fluid(maxWidth:1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const aboutQuery = graphql`
  query { 
    robotImage: file(relativePath: {eq: "about-me/vintage-robot-saying-hello.jpg"}) {
      ...fluidAboutImage
    },
    pmImage: file(relativePath: {eq: "about-me/product-launch.jpg"}) {
      ...fluidAboutImage
    },
    codeImage: file(relativePath: {eq: "about-me/software-code.jpg"}) {
      ...fluidAboutImage
    },
    sfImage: file(relativePath: {eq: "about-me/sf-baker-beach.jpg"}) {
      ...fluidAboutImage
    },
    hawaiiImage: file(relativePath: {eq: "about-me/hawaii-sunset.jpg"}) {
      ...fluidAboutImage
    },
    soccerImage: file(relativePath: {eq: "about-me/kids-playing-soccer.jpg"}) {
      ...fluidAboutImage
    },
    poolImage: file(relativePath: {eq: "about-me/swimming-pool.jpg"}) {
      ...fluidAboutImage
    },
    machuPichuImage: file(relativePath: {eq: "about-me/machu-pichu-003.jpg"}) {
      ...fluidAboutImage
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
            description
            cover {
              publicURL
              relativePath
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    },
  }
`
