import React from "react"

import * as S from "./booking.styles"

import { Doctors } from "../../../mocks/booking"

const DoctorsList = () => {
    return (
        <S.DoctorsListContainer>
            <S.DoctorsListTitle>Doctors Available</S.DoctorsListTitle>
            {Doctors.map((person) => {
                return <div key={person.name}>{person.name}</div>
            })}
        </S.DoctorsListContainer>
    )
}

export default DoctorsList
