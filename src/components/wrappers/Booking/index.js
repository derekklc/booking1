import React, { useState } from "react"

import TextField from "@mui/material/TextField"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"

import * as S from "./booking.styles"

import DoctorsList from "./DoctorList"
import PageHeaderA from "../../molecules/PageHeaderA"
import ButtonA from "../../molecules/ButtonA"
import BookingInstructions from "./BookingInstructions"

import { Instructions } from "../../../mocks/booking"

const Booking = () => {
    const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"))
    const handleChange = (newValue) => {
        setValue(newValue)
    }

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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/DD/YYYY"
                    //   value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </S.ContentContainer>
    )
}

export default Booking
