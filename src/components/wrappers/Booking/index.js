import React, { useState } from "react"

import * as S from "./booking.styles"

import DoctorsList from "./DoctorList"
import PageHeaderA from "../../molecules/PageHeaderA"
import ButtonA from "../../molecules/ButtonA"
import BookingInstructions from "./BookingInstructions"
import BookATime from "../../organisms/BookATime"

import { Instructions } from "../../../mocks/booking"

import { BookingStages } from "../../../constants"

const Booking = () => {
    const [bookingStage, setBookingStage] = useState(BookingStages.Landing)

    const renderLanding = () => {
        return (
            <>
                <S.PageSection theme={{ hasPadding: true }}>
                    <S.BookingButtonContainer>
                        <ButtonA buttonTitle="Begin Booking" />
                    </S.BookingButtonContainer>
                    <BookingInstructions instructions={Instructions.list} />
                </S.PageSection>
                <S.PageSection theme={{ hasPadding: false }}>
                    <DoctorsList updateBookingStage={setBookingStage} />
                </S.PageSection>
            </>
        )
    }

    const renderBookATime = () => {
        return <BookATime />
    }

    return (
        <S.ContentContainer>
            <PageHeaderA title="Online Booking" />
            {bookingStage === BookingStages.Landing && renderLanding()}
            {bookingStage === BookingStages.BookATime && renderBookATime()}
        </S.ContentContainer>
    )
}

export default Booking
