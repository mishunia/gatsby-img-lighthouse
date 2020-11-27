import React from "react"

import { ImageStyled } from "./styles"

const Image = ({ src }) => {
  return (
    <ImageStyled>
      <img src={src} alt="alt" />
    </ImageStyled>
  )
}

export default Image
