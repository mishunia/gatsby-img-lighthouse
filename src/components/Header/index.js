import React from "react"
import { HeaderStyled, HeaderHeroStyled, HeaderNavStyled } from "./styles"

import Hero from "./../Hero"
import Navigation from "./../Navigation"

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderHeroStyled>
        <Hero />
      </HeaderHeroStyled>
      <HeaderNavStyled>
        <Navigation />
      </HeaderNavStyled>
    </HeaderStyled>
  )
}

export default Header
