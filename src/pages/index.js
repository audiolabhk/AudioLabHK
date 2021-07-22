import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Section from "../components/section"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Section r='-reverse'/>
      <Section dark='true' r=''/>
    </Layout>
  )
}

export default IndexPage
