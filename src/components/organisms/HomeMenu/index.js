import React from "react"

import { useRouter } from "next/router"

import { homeMocks } from "../../../mocks/home"
import { shape } from "../../../svgs"
import { PageNames } from "tt/constants"

import parse from "html-react-parser"

import * as S from "./HomeMenu.styles"

const renderMenus = (changePage) => {
  return (
    <>
      {homeMocks.homeMenu.map((item) => {
        return (
          <S.MenuNode
            key={item.pageId}
            onClick={() => {
              changePage(item.pageId)
            }}
          >
            {!!item.icon && <S.svgIcon>{parse(shape)}</S.svgIcon>}
            <S.menuLabel>{item.label}</S.menuLabel>
          </S.MenuNode>
        )
      })}
    </>
  )
}

const HomeMenu = () => {
  const router = useRouter()

  const changePage = (sectionName) => {
    if (Object.values(PageNames).includes(sectionName)) {
      router.push(`/${sectionName}`)
    }
  }
  return <S.ContentContainer>{renderMenus(changePage)}</S.ContentContainer>
}

export default HomeMenu
