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

const renderHome = () => {
    return (
        <S.ContentContainer>
            <S.Title>HerbCure Medical</S.Title>
            <S.LogoContainer>MyLogo</S.LogoContainer>
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

const Home = () => {
    const currentSection = useReactiveVar(sectionId)
    console.log("currentSection", currentSection)
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

    return renderHome()
}

export default Home
