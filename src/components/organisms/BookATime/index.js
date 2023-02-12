import React, { useEffect, useState } from "react"

import TextField from "@mui/material/TextField"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"

import { sectionId } from "../../../reactiveVariables"
import { PageNames } from "../../../constants"

import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

import { Doctors, BookingContent, DayTimes } from "../../../mocks/booking"
import { breakpoints } from "../../../constants/breakpoints"

import * as S from "./BookATime.styles"

const BookATime = ({ doctorId }) => {
    const tmr = new Date(
        new Date().setDate(new Date().getDate() + 1)
    ).toISOString()
    const [selectedDate, setSelectedDate] = useState(dayjs(tmr))
    const [selectedTimeId, setSelectedTimeId] = useState("")
    // dayjs("2015-08-18")
    const initialIsMobile =
        !!window?.innerWidth && window.innerWidth <= breakpoints.mdUp
    const [isMobile, setIsMobile] = useState(initialIsMobile)
    const handleChange = (newValue) => {
        setSelectedDate(newValue)
    }

    const doctorProfile = Doctors.find((person) => person.doctoreId == doctorId)
    const screenSizeCheck = () => {
        if (window.innerWidth > breakpoints.mdUp) {
            setIsMobile(false)
        } else if (window.innerWidth <= breakpoints.mdUp) {
            setIsMobile(true)
        }
    }
    useEffect(() => {
        window?.addEventListener("resize", screenSizeCheck)
    })

    const { doctorNameLabel, availabilityLabel } = BookingContent

    const renderDatePicker = () => {
        return isMobile ? (
            <MobileDatePicker
                label="Date mobile"
                inputFormat="MM/DD/YYYY"
                value={selectedDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        ) : (
            <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={selectedDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        )
    }

    const SingleButton = (buttonProps) => {
        return (
            <Button
                variant={
                    selectedTimeId == buttonProps.timeId
                        ? "contained"
                        : "outlined"
                }
                onClick={() => {
                    setSelectedTimeId(buttonProps.timeId)
                }}
                {...(buttonProps.disabled ? { disabled: true } : {})}
            >
                {buttonProps.label}
            </Button>
        )
    }

    const renderTimePicker = () => {
        return (
            <S.TimePickerContainer>
                <S.PickerTitle>
                    Select Time:{" "}
                    <strong>(AEST - Australian Eastern Standard Time)</strong>
                </S.PickerTitle>
                <S.PickerSubTitle>Morning </S.PickerSubTitle>
                <S.TimeStackContainer>
                    <Stack direction="row" spacing={2}>
                        {DayTimes.morning.map((item) => {
                            return SingleButton(item)
                        })}
                    </Stack>
                </S.TimeStackContainer>
                <S.PickerSubTitle>Afternoon </S.PickerSubTitle>
                <S.TimeStackContainer>
                    <Stack direction="row" spacing={2}>
                        {DayTimes.afternoon.map((item) => {
                            return SingleButton(item)
                        })}
                    </Stack>
                </S.TimeStackContainer>
            </S.TimePickerContainer>
        )
    }

    return (
        <S.PageSection theme={{ hasPadding: true }}>
            <S.BookingTitle>Select a time with your doctor</S.BookingTitle>
            <S.PickerBodySection>
                <S.DoctorProfile>
                    <S.DoctorProfilePicture>
                        <img src={doctorProfile.profile} />
                    </S.DoctorProfilePicture>
                    <S.DoctorTextSecion>
                        <tr>
                            <td>
                                <S.DoctorInfoText
                                    theme={{ isFirstColumn: true }}
                                >
                                    {doctorNameLabel}:{" "}
                                </S.DoctorInfoText>
                            </td>

                            <td>
                                <S.DoctorInfoText>
                                    {doctorProfile.name}
                                </S.DoctorInfoText>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <S.DoctorInfoText
                                    theme={{ isFirstColumn: true }}
                                >
                                    {availabilityLabel}:{" "}
                                </S.DoctorInfoText>
                            </td>

                            <td>
                                <S.DoctorInfoText>
                                    {doctorProfile.details}
                                </S.DoctorInfoText>
                            </td>
                        </tr>
                    </S.DoctorTextSecion>
                </S.DoctorProfile>
                <S.DivisionLine />
                <S.DatePickerContainer>
                    <S.PickerTitle>Select Date:</S.PickerTitle>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {renderDatePicker()}
                    </LocalizationProvider>
                </S.DatePickerContainer>
                <S.DivisionLine />
                {renderTimePicker()}
                <S.SubmitButton>
                    <Button
                        variant="contained"
                        onClick={() => {
                            sectionId(PageNames.Home)
                        }}
                    >
                        Submit booking
                    </Button>
                </S.SubmitButton>
            </S.PickerBodySection>
        </S.PageSection>
    )
}

export default BookATime
