import styled from "@emotion/styled"

export const PageSection = styled.div`
    width: 96%;
    border-radius: 7px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 0 1px 4px 1px #b5b6c8;
    ${({ theme }) => (theme.hasPadding ? "padding-inline: 7%;" : "")}
`

export const BookingTitle = styled.h2`
    margin: 7px 0;
    font-size: 16px;
    font-weight: 20px;
    padding: 7px;
    border-radius: 3px;
    background: #393a4b;
    color: white;
`

export const PickerBodySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    margin-inline: auto;
    width: 100%;
`

export const DivisionLine = styled.div`
    width: 100%;
    height: 0;
    border-top: 1px solid lightgrey;
`

export const DoctorProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 14px;
`

export const DoctorProfilePicture = styled.div`
    width: 55px;
    height: 55px;
    > img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

export const DoctorTextSecion = styled.table`
    margin-top: 14px;
`

export const DoctorInfoText = styled.p`
    margin: 0;
    ${({ theme }) =>
        theme.isFirstColumn ? `font-weight: 600;` : `margin-left: 2px;`}
`

export const PickerTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 14px;
    > strong {
        font-size: 12px;
    }
`

export const PickerSubTitle = styled.h4`
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 14px;
`

export const TimeStackContainer = styled.div`
    margin-bottom: 14px;
`

export const DatePickerContainer = styled.div`
    width: 100%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 14px 0;
`

export const TimePickerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 14px 0;
    max-width: 100%;
    overflow: auto;
`

export const SubmitButton = styled.div`
    margin: 28px auto;
`
