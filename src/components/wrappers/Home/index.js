import React from "react"
// import { useReactiveVar } from "@apollo/client"

import { useRouter } from "next/router"
import { PageNames } from "bk/constants"

import * as S from "./home.styles"
// import { sectionId } from "../../../reactiveVariables"

import HomeMenu from "../../organisms/HomeMenu"
// import Booking from "../Booking"
// import AboutUs from "../About"
// import Products from "../Products"
// import { PageNames } from "../../../constants"
// import ContactUs from "../Contact"
// import SignUp from "../SignUp"
// import BottomBar from "../../organisms/BottomBar"
// import axios from "axios"

// import Login from "../Login"

// const renderHome = () => {
//   return (
//     <S.ContentContainer>
//       <S.Title onClick={sendData}>HerbCure Medical</S.Title>
//       <S.LogoContainer onClick={goToSignUp}>MyLogo</S.LogoContainer>
//       <S.BGCircle />
//       <HomeMenu />
//     </S.ContentContainer>
//   )
// }

const goToSignUp = () => {
  const router = useRouter()
  router.push(`/${PageNames.SignUp}`)
}

const HomePage = () => {
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
