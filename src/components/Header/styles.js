import styled from "styled-components"

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #000;
  max-width: 1400px;
  margin: 0 auto 32px;
  padding: 32px 0;
  border-bottom: 8px solid ${({ theme }) => theme.colors.brand};
`

const HeaderHeroStyled = styled.div``

const HeaderNavStyled = styled.div``

export { HeaderStyled, HeaderHeroStyled, HeaderNavStyled }
