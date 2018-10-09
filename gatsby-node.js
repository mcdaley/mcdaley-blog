//-----------------------------------------------------------------------------
// gatsby-node.js
//-----------------------------------------------------------------------------

const path                = require(`path`)
const { createFilePath }  = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if(node.internal.type === `MarkdownRemark`) {
    console.log(`[DEBUG]: Called onCreateNode for Markdown file`)
    // Debugging Info (next 2 lines)
    const fileNode = getNode(node.parent)
    console.log(`[DEBUG]:`, fileNode.relativePath)
    const slug = createFilePath({node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name:   `slug`,
      value:  slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise( (resolve, reject) => {
    graphql(
      `{
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  path
                }
                fields {
                  slug
                }
              }
            }
          }
      }`
    ).then(result => {  
      console.log(JSON.stringify(result, null, 4))
      
      const posts = result.data.allMarkdownRemark.edges
      posts.forEach( ({node}, index) => {
        createPage({
          path:       node.frontmatter.path == null ? node.fields.slug : node.frontmatter.path,
          component:  path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries 
            // as GraphQL variables
            slug: node.fields.slug,
            prev: index === 0                 ? null : posts[index - 1].node,
            next: index === posts.length - 1  ? null : posts[index + 1].node,
          },
        })
      })     
      resolve()
    })
  })
}