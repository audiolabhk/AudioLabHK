import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Section from "../components/section"
import Seo from "../components/seo"
import solutions from "../components/solutions"


const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Section solution={solutions[0]} r='-reverse'/>
      <Section solution={solutions[1]} dark='true' r=''/>
      <Section solution={solutions[2]} r='-reverse'/>
    </Layout>
  )
}


export default IndexPage
