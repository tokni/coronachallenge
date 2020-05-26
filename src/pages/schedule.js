import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/schedule/header"
import Intro from "../components/schedule/content"
import AboutUs from "../components/footer/about-us"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const Page = () => (
  <Layout>
    <SEO
      title="Schedule"
      image={{ src: Image, width: 1200, height: 630 }}
      pathname="/schedule"
    />
    <Header />
    <Intro />
    <AboutUs />
  </Layout>
)

export default Page
