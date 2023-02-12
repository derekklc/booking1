import { makeId } from "../utils"

const DOCTOR_ID_LENGTH = 8
const TIME_ID_LENGTH = 5

export const Doctors = [
    {
        name: "Ellie",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/female1.jpeg`,
        details: `Available from: Today!`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Gary",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/male1.jpeg`,
        details: `Available from: Fri, 3 Feb`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Tooraj",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/male1.jpeg`,
        details: `Available from: Thu, 2 Feb`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Susan",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/female1.jpeg`,
        details: `Available from: Monday, 6 Feb`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Elaine",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/female1.jpeg`,
        details: `Available from: Today!`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Darren",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/male1.jpeg`,
        details: `Available from: Today!`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Michael",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/male1.jpeg`,
        details: `Available from: Today!`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Liu",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/female1.jpeg`,
        details: `Available from: Today!`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
    {
        name: "Simon",
        profile: `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/male1.jpeg`,
        details: `Available from: Today!`,
        doctoreId: makeId(DOCTOR_ID_LENGTH),
    },
]

export const DayTimes = {
    morning: [
        { label: "8:00AM - 9:00AM", timeId: makeId(TIME_ID_LENGTH) },
        {
            label: "9:00AM - 10:00AM",
            timeId: makeId(TIME_ID_LENGTH),
            disabled: true,
        },
        { label: "10:00AM - 11:00AM", timeId: makeId(TIME_ID_LENGTH) },
        { label: "11:00AM - 12:00PM", timeId: makeId(TIME_ID_LENGTH) },
    ],
    afternoon: [
        {
            label: "12:00PM - 1:00PM",
            timeId: makeId(TIME_ID_LENGTH),
            disabled: true,
        },
        { label: "1:00PM - 2:00PM", timeId: makeId(TIME_ID_LENGTH) },
        { label: "2:00PM - 3:00PM", timeId: makeId(TIME_ID_LENGTH) },
        { label: "3:00PM - 4:00PM", timeId: makeId(TIME_ID_LENGTH) },
    ],
}

export const Instructions = {
    title: "Booking Instructions",
    list: [
        {
            id: "booking-instruction-1",
            title: "Face to face consult",
            paragraph:
                "If you are experiencing covid symptoms please book a phone consultation.",
        },
        {
            id: "booking-instruction-2",
            title: "Phone consult",
            paragraph:
                "Our staff will call you 15 minutes in advance to your appointment time. Please keep your phone/mobile available.",
        },
        {
            id: "booking-instruction-3",
            title: "Online consult",
            paragraph:
                "You will receive an email or text message with a Zoom meeting link in advance to your appointment. Please your contact device available.",
        },
    ],
}

export const BookingContent = {
    doctorNameLabel: "Doctor",
    availabilityLabel: "Availability",
}
