import React from "react"
import {graphql,Link,useStaticQuery} from "gatsby"
import {css}  from "@emotion/react"



function Blogs(props) {
    
    const blogdata = props.query
    console.log(blogdata)
    return(
        <div>
        {blogdata.map(({node})=> ( <div key={node.id} style={{backgroundColor: "lightgray",padding : 15 , margin: 3}}> 
        <Link to={node.fields.slug}> 
            <div >
                <h1>{node.frontmatter.title}</h1>
                <span css={css`color: #bbb;`} >{node.frontmatter.date}</span>
                <p>Total read of {node.timeToRead} min </p>
            </div>
            <div>
                <p>{node.excerpt}</p>
            </div>
            </Link>
        </div>) ) }

        {/* <div style={{display: "flex ", flexDirection : "row" }}>
            <button>Prev</button>
            <button>Next</button>
        </div> */}
        </div>
    )
}



export default Blogs ;