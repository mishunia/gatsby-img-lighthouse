import styled from "styled-components"

const HeroStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 0;
`

const HeroHeadingStyled = styled.h1`
  display: block;

  font-weight: 700;
  font-size: 30px;

  mark {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    &:before {
      content: "";
      position: absolute;
      left: -4px;
      top: 12px;
      width: 120%;
      height: 110%;
      background-color: ${({ theme }) => theme.colors.brand};
      z-index: -1;
    }
  }
`

export { HeroStyled, HeroHeadingStyled }
