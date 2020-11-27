import React from "react"

import { ImageStyled } from "./styles"

const Image = ({ fluid }) => {
  return (
    <ImageStyled>
      <source type="image/webp" srcSet={fluid.srcSetWebp} sizes={fluid.sizes} />
      <source srcSet={fluid.srcSet} sizes={fluid.sizes} />
      <img
        sizes={fluid.sizes}
        srcSet={fluid.srcSet}
        src={fluid.src}
        alt="alt"
      />
    </ImageStyled>
  )
}

export default Image
