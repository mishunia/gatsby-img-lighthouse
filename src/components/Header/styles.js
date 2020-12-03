import styled from "styled-components"

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #000;
  max-width: 1400px;
  margin: 0 auto 32px;
  padding: 12px 0;
  border-bottom: 8px solid ${({ theme }) => theme.colors.brand};

  @media (max-width: 768px) {
    display: none;
  }
`
const HeaderHeroStyled = styled.div`
  padding-right: 40px;
`

const HeaderNavStyled = styled.div``

export { HeaderStyled, HeaderHeroStyled, HeaderNavStyled }
