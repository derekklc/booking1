import React, { useState } from "react"

import * as S from "./booking.styles"

import DoctorsList from "./DoctorList"
import PageHeaderA from "../../molecules/PageHeaderA"
import ButtonA from "../../molecules/ButtonA"
import BookingInstructions from "./BookingInstructions"
import BookATime from "../../organisms/BookATime"

import { Instructions } from "../../../mocks/booking"

import { BookingStages, PageNames } from "../../../constants"

const Booking = () => {
    const [bookingStage, setBookingStage] = useState(BookingStages.Landing)
    const [doctorId, setDoctorId] = useState("")

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
                    <DoctorsList
                        setDoctorId={setDoctorId}
                        updateBookingStage={setBookingStage}
                    />
                </S.PageSection>
            </>
        )
    }

    const renderBookATime = () => {
        return <BookATime doctorId={doctorId} />
    }

    return (
        <S.ContentContainer>
            <PageHeaderA
                title="Online Booking"
                {...(bookingStage === BookingStages.BookATime
                    ? {
                          handleClick: () => {
                              setBookingStage(BookingStages.Landing)
                          },
                      }
                    : {})}
            />
            {bookingStage === BookingStages.Landing && renderLanding()}
            {bookingStage === BookingStages.BookATime && renderBookATime()}
        </S.ContentContainer>
    )
}

export default Booking
