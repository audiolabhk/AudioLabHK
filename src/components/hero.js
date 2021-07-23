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
    <div className="md:flex h-full bg-gray-700 p-12 text-white space-x-4 items-center">
      <div className="flex-1 text-center md:text-left mb-10">
        <h1 className="text-6xl">{title}</h1>
        <code className="opacity-80 tracking-widest mb-4">{description}</code>
        <ul className="list-inside">
          <li>Original, commercial music, and digital media solutions</li>
          <li>Streamlined production with quick turn-around </li>
          <li>Bespoke, customised solutions suitable for any budget</li>
        </ul>
        <button className="bg-green-600 p-3 rounded-full text-white text-bold">
          Get Started
        </button>
      </div>
      <div id="right" className="flex-1">
        <StaticImage
          className="p-1 rounded-3xl"
          placeholder="blurred"
          src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaW98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          alt="mixer black and white"
        />
      </div>
    </div>
  )
}
