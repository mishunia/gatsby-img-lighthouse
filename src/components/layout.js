import React from "react"

import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import theme from "./../themes/theme"
import Header from "./Header"
import Main from "./Main"

import GlobalStyles from "../common/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Main>{children}</Main>
          </ThemeProvider>
        )
      }}
    />
  )
}

export default Layout
