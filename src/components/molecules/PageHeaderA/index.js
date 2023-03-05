import React from "react"

import { useRouter } from "next/router"

import { PageNames } from "../../../constants"

import * as S from "./pageHeaderA.styles"

const PageHeaderA = ({ title, goBackTo, handleClick }) => {
  const router = useRouter()

  const isValidPageName =
    goBackTo && Object.values(PageNames).includes(goBackTo)
  const goToPage = (page) => {
    router.push(page)
  }
  const handleRedirect = () => {
    if (handleClick) {
      handleClick()
    } else if (isValidPageName) {
      goToPage(goBackTo)
    } else {
      goToPage(PageNames.Home)
    }
  }

  return (
    <S.ContentContainer>
      <S.HeaderLeft onClick={handleRedirect}>{`< Back`}</S.HeaderLeft>
      <S.HeaderMiddle>{title || ""}</S.HeaderMiddle>
      <S.HeaderRight></S.HeaderRight>
    </S.ContentContainer>
  )
}

export default PageHeaderA
