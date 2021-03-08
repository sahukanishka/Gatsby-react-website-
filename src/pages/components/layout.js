import React from "react"
import {Link} from 'gatsby'


const ListLink = (props) => {
    return (
        <li style={{display:"inline-block" , narginRight: "2rem"}}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}

function Layout({children}) {
    return (
    <div style = {{margin: "3rem auto",maxWidth: 650,padding: "0 1rem"}}>
       <header style={{marginBottom: "1.5rem"}}>
        <Link to="/" style={{ textShadow: "none" , backgroundImage: "none"}}>
            <h3 style={{display:"inline"}}>My fake site</h3>
        </Link>
        <ul style={{ listStyle: "none", float:"right" , display: "flex"}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About us</ListLink>
            <ListLink to="/contact">Contact us</ListLink>
        </ul>
       </header>
       
        {children} 
    </div>
    )
}

export default Layout;