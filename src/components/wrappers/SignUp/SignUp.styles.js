import styled from "@emotion/styled"

export const ContentContainer = styled.div`
  width: 100%;
`

export const BodyContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 75svh;
`

export const GlassBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(2px);
    z-index: -1;
  }
`

export const Title = styled.h1`
  margin-top: 28px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 14px;
  text-transform: uppercase;
`

export const FormContainer = styled.div`
  padding: 14px;
  form {
    display: flex;
    gap: 14px;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
`

export const LoginButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const RedirectButton = styled.div`
  button {
    color: white;
  }
`

export const Line = styled.div`
  border-top: 1px solid lightgrey;
  height: 0;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 7px;
`

export const StatusBanner = styled.div`
  padding: 10px 14px;
  margin-top: 14px;
  border-radius: 3px;
  font-size: 12px;
  ${({ theme }) =>
    theme.status === "success"
      ? ` background: lightgreen;
    color: green;
  `
      : `
    background: #e8c0c078;
    cursor: pointer;
    color: red;
    :hover {
      background: #e8c0c0;
    }
  `}
`

export const VidContainer = styled.div`
  height: 100svh;
  width: auto;
  min-width: 100svw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
