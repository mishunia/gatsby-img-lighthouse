import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"
import SEO from "./../components/Seo"
import Heading from "./../components/Heading"
import { GridStyled, GridItemStyled } from "./../components/Grid"
import Image from "./../components/Images/BaseImage"

const BaseImgExample = ({ data: { images } }) => {
  const photos = images.edges
  console.log(photos)
  return (
    <Layout>
      <SEO title="Gatsby Img example" />
      <Heading
        title={
          <>
            <mark>Base64 img</mark> example
          </>
        }
      />
      <GridStyled>
        {photos.map(photo => (
          <GridItemStyled key={photo.node.id}>
            <Image src={photo.node.base64.base64} />
          </GridItemStyled>
        ))}
      </GridStyled>
    </Layout>
  )
}

export default BaseImgExample

export const pageQuery = graphql`
  query {
    images: allImageSharp(
      filter: { original: { src: { regex: "/example-photo/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          base64: sizes(base64Width: 800, quality: 100) {
            base64
          }
        }
      }
    }
  }
`
