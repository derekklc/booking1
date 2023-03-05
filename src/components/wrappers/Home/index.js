import React from "react"

import { useRouter } from "next/router"
import { PageNames } from "tt/constants"

import * as S from "./home.styles"

import HomeMenu from "tt/components/organisms/HomeMenu"

const HomePage = () => {
  return (
    <S.ContentContainer>
      <S.Title>HerbCure Medical</S.Title>
      <S.LogoContainer>MyLogo</S.LogoContainer>
      <S.BGCircle />
      <HomeMenu />
    </S.ContentContainer>
  )
}

export default HomePage
