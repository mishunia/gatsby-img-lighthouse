import React from "react"

import {
  NavigationStyled,
  NavigationListStyled,
  NavigationListItemStyled,
  NavigationListItemLinkStyled,
} from "./styles"

const menu = [
  {
    id: 1,
    title: "Gatsby Img",
    slug: "/gatsby-image-example/",
  },
  {
    id: 5,
    title: "Gatsby Img Without fade",
    slug: "/gatsby-image-alt-example/",
  },
  {
    id: 2,
    title: "<img /> tag",
    slug: "/img-example",
  },
  {
    id: 6,
    title: "Picture Image",
    slug: "/picture-img-example",
  },
  {
    id: 3,
    title: "Base64 Image",
    slug: "/base-img-example",
  },
  {
    id: 4,
    title: "Gatsby Img NextGen",
    slug: "/gatsby-img-nextgen-example/",
  },
]

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavigationListStyled>
        {menu.map(({ id, title, slug }) => {
          return (
            <NavigationListItemStyled key={id}>
              <NavigationListItemLinkStyled to={slug} activeClassName="active">
                {title}
              </NavigationListItemLinkStyled>
            </NavigationListItemStyled>
          )
        })}
      </NavigationListStyled>
    </NavigationStyled>
  )
}

export default Navigation
