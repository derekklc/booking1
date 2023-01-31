import React from "react"
import { useReactiveVar } from "@apollo/client"

import * as S from "./home.styles"
import { sectionId } from "../../../reactiveVariables"

import HomeMenu from "../../organisms/HomeMenu"
import Booking from "../Booking"
import { PageNames } from "../../../constants"

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

const Home = () => {
    const currentSection = useReactiveVar(sectionId)
    console.log("currentSection", currentSection)
    if (!currentSection || currentSection === PageNames.Home) {
        return renderHome()
    }
    if (currentSection === PageNames.Bookings) {
        return renderBooking()
    }
    return <>default</>
}

export default Home
