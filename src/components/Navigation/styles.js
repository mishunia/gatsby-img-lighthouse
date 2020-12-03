import styled from "styled-components"
import { Link } from "gatsby"

const NavigationStyled = styled.div`
  width: 100%;
`

const NavigationListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

const NavigationListItemStyled = styled.li`
  position: relative;
  flex: 1;
`

const NavigationListItemLinkStyled = styled(Link)`
  position: relative;
  display: block;
  max-width: 100px;
  color: #000;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 1;
  padding: 8px;
  &.active {
    &:before {
      background-color: ${({ theme }) => theme.colors.brand2};
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: -5px;
    top: 5px;
    background-color: ${({ theme }) => theme.colors.brand};
    transition: 0.3s ease-out;
    z-index: -1;
  }
  &:hover {
    &:before {
      background-color: ${({ theme }) => theme.colors.brand2};
    }
  }
`

export {
  NavigationStyled,
  NavigationListStyled,
  NavigationListItemStyled,
  NavigationListItemLinkStyled,
}
