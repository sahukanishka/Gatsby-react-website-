import React from "react"
import Header from "./components/header"
import Layout from './components/layout'


function Home() {
  return (
    <Layout>
    <div style={{ margin: "3rem auto" , maxWidth: 600}}>
      <Header title="This is fake site"/>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </div>
    </Layout>
  )
}

export default Home ; 