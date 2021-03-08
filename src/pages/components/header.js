import React from "react"

function Header(props) {
    return (
        <div>
            <h1 style={{fontFamily:"sans-serif"}}>{props.title}</h1>
        </div>
    )
}

export default Header ;