import React from "react"
import Img from "gatsby-image"

import { ImageStyled } from "./styles"

const Image = ({ fluid }) => (
  <ImageStyled>
    <Img fluid={fluid} objectFit="cover" alt="alt" />
  </ImageStyled>
)

export default Image

// <Img
//   fluid={fluid}
//   objectFit="cover"
//   objectPosition={objectPosition}
//   fadeIn={false}
//   loading="eager"
//   alt={alt}
// />
