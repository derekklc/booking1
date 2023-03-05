import React from "react"
// import { useReactiveVar } from "@apollo/client"

import { useRouter } from "next/router"
import { PageNames } from "tt/constants"

import * as S from "./home.styles"
// import { sectionId } from "../../../reactiveVariables"

import HomeMenu from "tt/components/organisms/HomeMenu"

const HomePage = () => {
  const router = useRouter()
  const goToSignUp = () => {
    router.push(`/${PageNames.SignUp}`)
  }
  return (
    <S.ContentContainer>
      <S.Title>HerbCure Medical</S.Title>
      <S.LogoContainer onClick={goToSignUp}>MyLogo</S.LogoContainer>
      <S.BGCircle />
      <HomeMenu />
    </S.ContentContainer>
  )
}

export default HomePage
