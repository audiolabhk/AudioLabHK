import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Features(props) {
    const classname =
    "mx-auto lg:grid md:grid grid-cols-2 items-center text-center" +
    props.reverse
  return (
    <section className={props.dark}>
      <div className="dark:text-white dark:bg-gray-600 body-font">
        <div className={classname}>
          <div >
            <h2 className="mb-1 text-4xl">{props.title}</h2>
            <p className="mb-4 text-semibold">{props.description}</p>
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Learn More
            </button>
          </div>
          <div>
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
