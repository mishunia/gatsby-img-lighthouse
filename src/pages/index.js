import React from "react"

import Layout from "./../components/Layout"

import SEO from "./../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>{process.env.GATSBY_HEADING_TITLE}</div>
    <div>{process.env.TEST_ENVAR}</div>
    <div>Use navigation please.</div>
  </Layout>
)

export default IndexPage
