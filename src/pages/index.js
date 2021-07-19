import * as React from "react"
import Hero from "../components/hero"
import Features from "../components/features"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SolutionList from "../solutionList"

const IndexPage = () => {
  // const solutionComp = SolutionList.map(s => (
  //   <Features
  //     key={s.id}
  //     dark={s.id % 2 === 0 ? "dark" : ""}
  //     reverse={s.id % 2 === 0 ? "-reverse" : ""}
  //     title={s.title}
  //     description={s.description}
  //   />
  // ))
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />

      <div data-sal="fade" duration="1000" data-sal-easing="ease">
        <Features
          dark="dark"
          reverse=""
          title={SolutionList[0].title}
          description={SolutionList[0].description}
        />
      </div>
      <div data-sal="slide-right" duration="1000" data-sal-easing="ease">
        <Features
          dark=""
          reverse="-reverse"
          title={SolutionList[1].title}
          description={SolutionList[1].description}
        />
      </div>
      <div data-sal="slide-right" duration="1000" data-sal-easing="ease">
        <Features
          dark="dark"
          reverse=""
          title={SolutionList[2].title}
          description={SolutionList[2].description}
        />
      </div>
      <div data-sal="slide-UP" duration="1000" data-sal-easing="ease">
        <Features
          dark=""
          reverse="-reverse"
          title={SolutionList[3].title}
          description={SolutionList[3].description}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
