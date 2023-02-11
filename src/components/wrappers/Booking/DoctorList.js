import React from "react"

import * as S from "./booking.styles"

import { Doctors } from "../../../mocks/booking"

import { BookingStages } from "../../../constants"

const DoctorsList = ({ updateBookingStage }) => {
    const goToBookATime = () => {
        updateBookingStage(BookingStages.BookATime)
    }

    return (
        <S.DoctorsListContainer>
            <S.DoctorsListTitle>Doctors Available</S.DoctorsListTitle>
            <S.DoctorsList>
                {Doctors.map((person) => {
                    return (
                        <S.DoctorNode
                            key={person.name}
                            onClick={() => {
                                goToBookATime()
                            }}
                        >
                            <S.DoctorProfileContainer>
                                <img src={person.profile} />
                            </S.DoctorProfileContainer>
                            <S.DoctorTextSecion>
                                <S.DoctorName>{person.name}</S.DoctorName>
                                <S.DoctorDetails>
                                    {person.details}
                                </S.DoctorDetails>
                            </S.DoctorTextSecion>
                        </S.DoctorNode>
                    )
                })}
            </S.DoctorsList>
        </S.DoctorsListContainer>
    )
}

export default DoctorsList
