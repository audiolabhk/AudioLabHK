import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Features(props) {
    const classname =
    "mx-auto flex px-5 py-24 flex-col items-center md:flex-row" +
    props.reverse
  return (
    <section className={props.dark}>
      <div className="dark:text-white dark:bg-gray-600 body-font lg:px-32">
        <div className={classname}>
          <div className="flex-1" >
            <h2 className="mb-1 text-4xl">{props.title}</h2>
            <p className="mb-4 text-semibold">{props.description}</p>
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Learn More
            </button>
          </div>
          <div className="flex-1 mx-6">
            <StaticImage
              src={"../images/720.png"}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="alternative description"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
