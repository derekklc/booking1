import React, { useState } from "react"

import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"

import * as S from "./ConfirmTime.styles"
import { Doctors, DayTimes } from "../../../mocks/booking"
import { makeTable } from "../../../utils"
import { PageNames } from "../../../constants"
import LoaderA from "../../molecules/LoaderA"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ConfirmTime = ({ selectedDate, selectedTimeId, doctorId }) => {
  console.log("selectedDate", selectedDate)
  console.log("selectedTimeId", selectedTimeId)
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }
  const bookingDay = new Date(selectedDate?.format()).toISOString()
  const morningTime = DayTimes.morning.find(
    (item) => item.timeId === selectedTimeId
  )
  const arvoTime = DayTimes.afternoon.find(
    (item) => item.timeId === selectedTimeId
  )
  const myDoctor = Doctors.find((person) => person.doctoreId === doctorId)

  const tableContent = [
    [{ text: "Doctor:", isTitle: true }, { text: myDoctor.name }],
    [{ text: "Date:", isTitle: true }, { text: bookingDay }],
    [
      { text: "Time of day:", isTitle: true },
      { text: morningTime?.label || arvoTime?.label },
    ],
  ]
  return (
    <S.ContentContainer>
      <S.PageTitle>ConfirmTime</S.PageTitle>
      <S.TableContainer>{makeTable(tableContent)}</S.TableContainer>

      <Button
        variant="contained"
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true)
          }
          setTimeout(() => {
            // sectionId(PageNames.Home)
          }, 2000)
        }}
      >
        Confirm Booking
      </Button>
      {isOpen && <LoaderA />}
      <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </S.ContentContainer>
  )
}

export default ConfirmTime
