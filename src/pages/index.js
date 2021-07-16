import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from '../styles/home.module.css'

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

      <div className={style.container}>
        <div>
          <h1>{site.siteMetadata.title}</h1>
          <p>{site.siteMetadata.description}</p>
        </div>
        <div>
          <StaticImage
            src="../images/dog.jpg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
