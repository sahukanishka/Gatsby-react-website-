const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ( {node,getNode,actions}) => {
  const {createNodeField} = actions 
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({node,getNode,basePath: `pages`})
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
   
      // const fileNode = getNode(node.parent)
      // console.log(`\n`, fileNode.relativePath)
      // console.log(createFilePath({node,getNode,basePath: `pages`}))
      //   console.log("**********" + node.internal.type) 
      }
}

exports.createPages = async ({graphql,actions}) => {
  const {createPage } = actions 
  const result = await graphql(`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          excerpt
          timeToRead
          wordCount {
            words
          }
          html
          id
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
//single post pages
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({node})=>{
    createPage({
      path: node.fields.slug,
      component : path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug 
      },
    })
  })

  // console.log(JSON.stringify(result,null,4))

 
  // const postsPerPage = 2
  // const numofPages = Math.ceil(posts.length / postsPerPage)
  // Array.from({ length: numofPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/` : `/${i + 1}`,
  //     component: path.resolve("./src/pages/index.js"),
  //     context: {
  //       data : result ,
  //       numofPages,
  //       limit : postsPerPage,
  //       skip : i * postsPerPage,
  //       currentPage: i + 1,
  //     },
  //   })
  // })


  
  const postsPerPage = 2
  const numofPages = Math.ceil(posts.length / postsPerPage)
  var newarray = Array.from({ length: numofPages })
  const nodedata = result.data.allMarkdownRemark.edges
  // console.log(nodedata)
  var j = 0; 
  for(var i = 0 ; i <= newarray.length ; i++ ) {
    var postData = nodedata.slice(j,(i+1)*postsPerPage)
    console.log(postData)
    j = j+2 ;
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/pages/index.js"),
      context: {
        data : postData ,
        numofPages,
        limit : postsPerPage,
        skip : i * postsPerPage,
        currentPage: i + 1,
      },
    })
  }

}

