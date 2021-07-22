import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Section(props) {
  return (
    <div className={props.dark ? "dark" : ""}>
      <section
        className={
          " md:flex dark:bg-gray-800 h-2/3 bg-gray-100 p-10 items-center flex-row" +
          props.r
        }
      >
        <div className="flex-1 p-5 md:text-left text-center dark:text-white">
          <h1 className="text-4xl mb-3">Title goes here</h1>
          <h2 className="text-md mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quasi nesciunt eos quia dicta commodi facilis dolore ex, et, porro
            animi. Veniam dolorem est atque quis, dolor ipsum. Accusamus,
            dolorem?
          </h2>
          <button className="bg-red-400 p-2 rounded-xl hover:bg-gray-400">
            Button 1
          </button>
          <button className="bg-white p-2 text-blue-900 rounded-xl hover:bg-gray-400">
            Button 1
          </button>
        </div>
        <div className="flex-1 p-3">
              <StaticImage
                className="rounded-xl w-full shadow-md"
                src="../images/hero-image.jpg"
                placeholder="blurred"
              />
          </div>
      </section>
    </div>
  )
}
