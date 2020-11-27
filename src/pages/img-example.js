import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"
import SEO from "./../components/Seo"
import Heading from "./../components/Heading"
import { GridStyled, GridItemStyled } from "./../components/Grid"
import Image from "./../components/Images/Image"

const ImageExamplePage = ({ data: { images } }) => {
  const photos = images.edges
  console.log(photos)
  return (
    <Layout>
      <SEO title="Gatsby Img example" />
      <Heading
        title={
          <>
            Standard <mark>img</mark> tag
          </>
        }
      />
      <GridStyled>
        {photos.map(photo => (
          <GridItemStyled key={photo.node.id}>
            <Image src={photo.node.fluid.src} />
          </GridItemStyled>
        ))}
      </GridStyled>
    </Layout>
  )
}

export default ImageExamplePage

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
