import React from "react"
import Img from "gatsby-image"

import { ImageStyled } from "./styles"

const Image = ({ fluid }) => (
  <ImageStyled>
    <Img
      fluid={fluid}
      objectFit="cover"
      fadeIn={false}
      loading="eager"
      alt="alt"
    />
  </ImageStyled>
)

export default Image
