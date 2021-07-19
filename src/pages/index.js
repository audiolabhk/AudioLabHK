import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/hero"
import Features from "../components/features"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Signup from "../components/signup"

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Seo title="Home" />
        <Hero />
        <Features dark="dark" reverse=""/>
        <Features dark="light" reverse='-reverse'/>
        <Signup />
    </Layout>
  )
}

export default IndexPage
