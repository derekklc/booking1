import React from "react"

import Image from "next/image"

import * as S from "./booking.styles"

import { Doctors } from "../../../mocks/booking"

import { BookingStages } from "../../../constants"

const DoctorsList = ({ setDoctorId, updateBookingStage }) => {
  const goToBookATime = ({ selectedDoctorId }) => {
    if (selectedDoctorId) {
      setDoctorId(selectedDoctorId)
      updateBookingStage(BookingStages.BookATime)
    }
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
                goToBookATime({
                  selectedDoctorId: person.doctoreId,
                })
              }}
            >
              <S.DoctorProfileContainer>
                <Image
                  src={person.profile}
                  alt="doctor profile"
                  width={100}
                  height={100}
                />
              </S.DoctorProfileContainer>
              <S.DoctorTextSecion>
                <S.DoctorName>{person.name}</S.DoctorName>
                <S.DoctorDetails>{person.details}</S.DoctorDetails>
              </S.DoctorTextSecion>
            </S.DoctorNode>
          )
        })}
      </S.DoctorsList>
    </S.DoctorsListContainer>
  )
}

export default DoctorsList
