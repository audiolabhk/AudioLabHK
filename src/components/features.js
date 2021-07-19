import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function (props) {
  const classname = "container mx-auto flex gap-x-5 px-5 py-24 flex-col items-center md:flex-row" + props.reverse
  return (
    <section className={props.dark}>
      <div className="dark:text-white dark:bg-gray-600 body-font lg:px-32">
        <div className={classname}>
          <div className="flex-1">
            <h2 className="mb-4 text-4xl">Left</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              nesciunt perspiciatis consequatur numquam non quo pariatur debitis
              amet, possimus mollitia obcaecati assumenda, .
            </p>
          </div>
          <div className="flex-1">
            <StaticImage
              src="../images/720.png"
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
