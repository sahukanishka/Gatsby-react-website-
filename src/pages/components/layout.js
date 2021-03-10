import React from "react"
import {Link,useStaticQuery,graphql} from 'gatsby'
import SideBar from "../components/sideBar"

const ListLink = (props) => {
    console.log(props)
    return (
        <li style={{display:"inline-block" , narginRight: "2rem"}}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}



function Layout({children}) {
    const data = useStaticQuery (
        graphql`
        query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
    <div style = {{margin: "3rem auto",maxWidth: 650,padding: "0 1rem"}}>
       <header style={{marginBottom: "1.5rem"}}>
        <Link to="/" style={{ textShadow: "none" , backgroundImage: "none"}}>
            <h3 style={{display:"inline"}}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: "none", float:"right" , display: "flex"}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About us</ListLink>
            <ListLink to="/contact">Contact us</ListLink>
            <ListLink to="/my-files/">Files list</ListLink>
        </ul>

       </header>
       
        {children} 
    </div>
    )
}

export default Layout;