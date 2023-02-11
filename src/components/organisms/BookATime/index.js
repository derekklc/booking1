import React, { useState } from "react"

import TextField from "@mui/material/TextField"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"

const BookATime = () => {
    const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"))
    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <>
            BookATime
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
        </>
    )
}

export default BookATime
