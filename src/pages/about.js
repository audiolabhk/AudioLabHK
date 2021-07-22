import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const FAQ = props => (
  <section className={props.faq.key % 2 === 0 ? 'dark' : ''}>
    <div className="md:flex w-full px-6 py-6 mx-auto mt-10 dark:bg-gray-600 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-purple-500 dark:text-white sm:text-xl md:text-2xl">
          {props.faq.question}
        </h3>
        <p className="mt-2 text-base text-gray-600 dark:text-white sm:text-lg md:text-normal">
          {props.faq.answer}
        </p>
      </div>
      <div className="flex">
        <StaticImage
          src="../images/studio.jpg"
          class="rounded-full flex-1 w-20 hidden md:inline"
          placeholder="blurred"
          quality="50"
          alt="music studio mixing deck"
        />
      </div>
    </div>
  </section>
)

const FAQs = [
  { key: 1, question: "Audio Production", answer: "Music production, audio mixing, mastering for commercial release" },
  { key: 2, question: "Live Sound", answer: "Immersive audio and interactive soundscapes" },
  { key: 3, question: "Commercial Audio", answer: "Ad Media Solutions for Entrepreneurs and Small Business" },
  { key: 4, question: "Original Music", answer: "Add guitar, bass, drums, and electronic instruments behind voices" },
]

const faqmap = FAQs.map(f => <FAQ key={f.key} faq={f} />)

const SecondPage = () => (
  <Layout>
    <Seo title="About" />
    <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay text-center">
      <h1 className="text-4xl text-light uppercase">Things You Should Know</h1>
      {faqmap}
    </section>
  </Layout>
)

export default SecondPage
