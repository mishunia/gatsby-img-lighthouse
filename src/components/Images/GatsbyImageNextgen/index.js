import React from "react"
import { GatsbyImage } from "@wardpeet/gatsby-image-nextgen/compat"

import { ImageStyled } from "./styles"

const Image = ({ fluid }) => (
  <ImageStyled>
    <GatsbyImage fluid={fluid} alt="alt" />
  </ImageStyled>
)

export default Image
