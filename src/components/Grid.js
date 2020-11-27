import styled from "styled-components"

const GridStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

const GridItemStyled = styled.li`
  width: 100%;
`

export { GridStyled, GridItemStyled }
