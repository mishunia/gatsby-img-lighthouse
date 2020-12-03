import styled from "styled-components"

const HeadingItemStyled = styled.h1`
  display: inline-block;
  font-size: 38px;

  font-weight: 700;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  mark {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.brand};
    padding: 0 18px;
  }

  span {
    text-decoration: underline;
  }
`

export { HeadingItemStyled }
