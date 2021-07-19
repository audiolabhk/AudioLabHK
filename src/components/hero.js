import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

export default function Hero() {
  const { site } = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = site.siteMetadata
  return (
    <section className="text-gray-600 body-font lg:px-32">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <StaticImage
              src="../images/720.png"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="alternative description"
            />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font text-4xl mb-2 font-medium text-gray-900">
            {title}
          </h1>
          <h2 className="mb-4 text-2xl">{description}</h2>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            autem ipsum consequuntur sit incidunt, doloremque labore soluta
            blanditiis voluptatibus quis, aut, fuga odit earum maxime
            distinctio! Officiis provident repellat enim!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
