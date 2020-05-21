import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/privacypolicy/header"
import Content from "../components/privacypolicy/content"
import AboutUs from "../components/footer/about-us"

const Page = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Header />
    <Content />
    <AboutUs />
  </Layout>
)

export default Page
