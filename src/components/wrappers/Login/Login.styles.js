import styled from "@emotion/styled"

export const ContentContainer = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  margin-top: 28px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
`

export const CreateNew = styled.div`
  display: grid;
  grid-template-columns: auto fit-content auto;
  align-items: center;
`

export const Line = styled.div`
  border-top: 1px solid lightgrey;
  height: 0;
  width: 100%;
`

export const CreateNewText = styled.p`
  margin: 0;
`

export const StatusBanner = styled.div`
  padding: 14px 0;
  ${({ theme }) =>
    theme.status === "success"
      ? ` background: lightgreen;
    color: green;
  `
      : `
    background: #e8c0c0;
    color: red;
  `}
`
