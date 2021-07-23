import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Section(props) {
  console.log(data)
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "commercial.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={props.dark ? "dark" : ""}>
      <section
        className={
          " md:flex dark:bg-gray-600 dark:text-white h-2/3 bg-gray-100 p-10 items-center flex-row" +
          props.r
        }
      >
        <div className="flex-1 p-5 md:text-left text-center ">
          <h1 className="text-4xl mb-3">{props.solution.title}</h1>
          <h2 className="text-md mb-10">{props.solution.description}</h2>
        </div>
        <div className="flex-1 p-3">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </section>
    </div>
  )
}
