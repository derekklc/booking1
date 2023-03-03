import React from "react"
import { useReactiveVar } from "@apollo/client"

import * as S from "./home.styles"
import { sectionId } from "../../../reactiveVariables"

import HomeMenu from "../../organisms/HomeMenu"
import Booking from "../Booking"
import AboutUs from "../About"
import Products from "../Products"
import { PageNames } from "../../../constants"
import ContactUs from "../Contact"
import SignUp from "../SignUp"
import BottomBar from "../../organisms/BottomBar"
import axios from "axios"

import Facade from "../../molecules/Facade"
import Login from "../Login"

const renderFacade = () => {
  return (
    <Facade
      facadeClick={() => {
        sectionId(PageNames.Home)
      }}
    />
  )
}

const sendData = async () => {
  console.log("clicked")
  const newNote = {
    title: "7PM",
    content: "Content7PM",
  }
  await axios.post("http://localhost:3001/create", newNote)
}

const goToSignUp = () => {
  sectionId(PageNames.SignUp)
}

const renderHome = () => {
  return (
    <S.ContentContainer>
      <S.Title onClick={sendData}>HerbCure Medical</S.Title>
      <S.LogoContainer onClick={goToSignUp}>MyLogo</S.LogoContainer>
      <S.BGCircle />
      <HomeMenu />
    </S.ContentContainer>
  )
}

const renderBooking = () => {
  return <Booking />
}

const renderAbout = () => {
  return <AboutUs />
}

const renderProducts = () => {
  return <Products />
}

const renderContact = () => {
  return <ContactUs />
}

const renderSignUp = () => {
  return <SignUp />
}

const renderLogin = () => {
  return <Login />
}

const RenderPages = ({ currentSection }) => {
  if (currentSection === PageNames.Start) {
    return renderFacade()
  }
  if (!currentSection || currentSection === PageNames.Home) {
    return renderHome()
  }
  if (currentSection === PageNames.Bookings) {
    return renderBooking()
  }
  if (currentSection === PageNames.About) {
    return renderAbout()
  }
  if (currentSection === PageNames.Products) {
    return renderProducts()
  }
  if (currentSection === PageNames.Contact) {
    return renderContact()
  }
  if (currentSection === PageNames.SignUp) {
    return renderSignUp()
  }
  if (currentSection === PageNames.Login) {
    return renderLogin()
  }

  return renderHome()
}

const Home = () => {
  const currentSection = useReactiveVar(sectionId)
  const showBottomBar = currentSection !== PageNames.Start
  return (
    <>
      <RenderPages currentSection={currentSection} />
      {showBottomBar && <BottomBar />}
    </>
  )
}

export default Home
