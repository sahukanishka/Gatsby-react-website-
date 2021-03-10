import React from 'react'; 
import Header from './components/header'
import Layout from './components/layout'

function About() {
    const title = "About us";
    const title2 = "bar text"
    return (
        <Layout>
        <div>
            <Header title={title}/>
                <p>React component with gatsby</p>
            <Header title="new"/>
        </div>
        </Layout>
    )
}


export default About ; 