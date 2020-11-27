import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"
import SEO from "./../components/Seo"
import Heading from "./../components/Heading"
import { GridStyled, GridItemStyled } from "./../components/Grid"
import Image from "./../components/Images/GatsbyImageAlt"

const GatsbyImageAltExamplePage = ({ data: { images } }) => {
  const photos = images.edges
  return (
    <Layout>
      <SEO title="Gatsby Img example" />
      <Heading
        title={
          <>
            <mark>Gatsby-image</mark> + loading <span>eager</span> without{" "}
            <span>fadeIn</span>
          </>
        }
      />
      <GridStyled>
        {photos.map(photo => (
          <GridItemStyled key={photo.node.id}>
            <Image fluid={photo.node.fluid} />
          </GridItemStyled>
        ))}
      </GridStyled>
    </Layout>
  )
}

export default GatsbyImageAltExamplePage

export const pageQuery = graphql`
  query {
    images: allImageSharp(
      filter: { original: { src: { regex: "/example-photo/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
