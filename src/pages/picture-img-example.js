import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Heading from "../components/Heading"
import { GridStyled, GridItemStyled } from "../components/Grid"
import Image from "../components/Images/PictureImage"

const PictureImgExamplePage = ({ data: { images } }) => {
  const photos = images.edges
  console.log(photos)
  return (
    <Layout>
      <SEO title="Picture img example" />
      <Heading
        title={
          <>
            <mark>Picture img</mark> with srcs example
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

export default PictureImgExamplePage

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
