import React from "react";
import Header from "./components/header";
import Layout from './components/layout';
import {graphql,useStaticQuery} from "gatsby";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination"


function Home(props) {
  const pageData = props.pageContext
  // const pagetitle = pageData.data.data.site.siteMetadata.title
  console.log(pageData)
  return (
    <Layout >
    <div style={{ margin: "3rem auto" , maxWidth: 600}}>
      {/* <Header title={pagetitle}/> */}
      <p>
       Read the latest blogs
      </p>
    </div>
    <Blogs query={pageData.data} />
    <Pagination query={pageData}/>
    </Layout>
  )
}


// export const query = graphql `
// query {
//   allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
//     edges {
//       node {
//         frontmatter {
//           date
//           title
//         }
//         excerpt
//         timeToRead
//         wordCount {
//           words
//         }
//         html
//         id
//         fields {
//           slug
//         }
//       }
//     }
//   }
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }`


export default Home ; 
