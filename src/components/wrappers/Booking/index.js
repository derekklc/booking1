import React, { useState } from "react"

import dayjs from "dayjs"

import * as S from "./booking.styles"

import DoctorsList from "./DoctorList"
import PageHeaderA from "../../molecules/PageHeaderA"
import ButtonA from "../../molecules/ButtonA"
import BookingInstructions from "./BookingInstructions"
import BookATime from "../../organisms/BookATime"

import { Instructions } from "../../../mocks/booking"

import { BookingStages, PageNames } from "../../../constants"
import ConfirmTime from "../../organisms/ConfirmTime"

const Booking = () => {
    const [bookingStage, setBookingStage] = useState(BookingStages.Landing)
    const [doctorId, setDoctorId] = useState("")

    const tmr = new Date(
        new Date().setDate(new Date().getDate() + 1)
    ).toISOString()
    const [selectedDate, setSelectedDate] = useState(dayjs(tmr))

    const [selectedTimeId, setSelectedTimeId] = useState("")
    // const []

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
        return (
            <BookATime
                doctorId={doctorId}
                updateBookingStage={setBookingStage}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTimeId={selectedTimeId}
                setSelectedTimeId={setSelectedTimeId}
            />
        )
    }

    const renderConfirmTime = () => {
        return (
            <ConfirmTime
                selectedDate={selectedDate}
                selectedTimeId={selectedTimeId}
                doctorId={doctorId}
            />
        )
    }

    const getBackButtonClickHandler = () => {
        if (bookingStage === BookingStages.BookATime) {
            return {
                handleClick: () => {
                    setBookingStage(BookingStages.Landing)
                },
            }
        }
        if (bookingStage === BookingStages.ConfirmTime) {
            return {
                handleClick: () => {
                    setBookingStage(BookingStages.BookATime)
                },
            }
        }
        return {}
    }

    return (
        <S.ContentContainer>
            <PageHeaderA
                title="Online Booking"
                {...getBackButtonClickHandler()}
            />
            {bookingStage === BookingStages.Landing && renderLanding()}
            {bookingStage === BookingStages.BookATime && renderBookATime()}
            {bookingStage === BookingStages.ConfirmTime && renderConfirmTime()}
        </S.ContentContainer>
    )
}

export default Booking
