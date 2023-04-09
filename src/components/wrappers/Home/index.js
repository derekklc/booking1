import React from "react"

import { useAuth } from "tt/context/AuthContext"

import * as S from "./home.styles"

import HomeMenu from "tt/components/organisms/HomeMenu"

const HomePage = () => {
  const { logout } = useAuth()
  const logoutHandler = () => {
    logout()
  }

  return (
    <S.ContentContainer>
      <S.Title>HerbCure Medical</S.Title>
      <S.LogoContainer onClick={logoutHandler}>MyLogo</S.LogoContainer>
      <S.BGCircle />
      <HomeMenu />
    </S.ContentContainer>
  )
}

export default HomePage
