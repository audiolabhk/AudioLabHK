import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Section from "../components/section"
import Seo from "../components/seo"
import solutions from "../components/solutions"
import { Helmet } from "react-helmet"


const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="AudioLab HK"/>
        <meta property="og:image:type" content="../images/commercial.jpg" />
        <meta property="og:image:width" content="1024" />
      </Helmet>
      <Seo title="Home" />
      <Hero />
      <Section solution={solutions[0]} r='-reverse' />
      <Section solution={solutions[1]} dark='true' r='' />
      <Section solution={solutions[2]} r='-reverse' />
    </Layout>
  )
}


export default IndexPage
