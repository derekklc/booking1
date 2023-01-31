import React from "react"

import * as S from "./booking.styles"

import DoctorsList from "./DoctorList"
import PageHeaderA from "../../molecules/PageHeaderA"
import ButtonA from "../../molecules/ButtonA"
import BookingInstructions from "./BookingInstructions"

import { Instructions } from "../../../mocks/booking"

const Booking = () => {
    return (
        <S.ContentContainer>
            <PageHeaderA title="Online Booking" />
            <S.PageSection theme={{ hasPadding: true }}>
                <S.BookingButtonContainer>
                    <ButtonA buttonTitle="Begin Booking" />
                </S.BookingButtonContainer>
                <BookingInstructions instructions={Instructions.list} />
            </S.PageSection>
            <S.PageSection theme={{ hasPadding: false }}>
                <DoctorsList />
            </S.PageSection>
        </S.ContentContainer>
    )
}

export default Booking
