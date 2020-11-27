import styled from "styled-components"

const ImageStyled = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .gatsby-image {
    width: 100%;
    height: 100%;
  }
`

export { ImageStyled }
