import { useRef, useState } from "react"
import { useRouter } from "next/router"

import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material"
import { green } from "@mui/material/colors"

import * as S from "./Login.styles"

import { useAuth } from "tt/context/AuthContext"
import { PageNames } from "tt/constants"

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("")
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { login } = useAuth()

  const router = useRouter()

  const buttonThemeGreen = createTheme({
    palette: {
      primary: green,
    },
  })

  const handleSignup = async (e) => {
    e.preventDefault()
    const userEmail = emailRef.current.value
    const userPassword = passwordRef.current.value
    try {
      await login(userEmail, userPassword)
      setLoginStatus("success")
      setTimeout(() => {
        router.push(PageNames.Home)
      }, 1000)
    } catch (error) {
      console.log("login error", error)
      setLoginStatus("failed")
    }
  }
  // console.log("UUUUuser", user)
  return (
    <S.ContentContainer>
      {!!loginStatus && (
        <S.StatusBanner theme={{ status: loginStatus }}>
          {loginStatus === "success"
            ? "Login Success!"
            : "Login Failed! Please try agian."}
        </S.StatusBanner>
      )}
      <S.Title>Login</S.Title>
      <S.FormContainer>
        <div>
          <label htmlFor="login-username">Username</label>
          <input id="login-username" type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" ref={passwordRef} />
        </div>
      </S.FormContainer>

      <Button variant="contained" onClick={handleSignup}>
        Sign In
      </Button>

      <S.CreateNew>
        <S.Line />
        <S.CreateNewText>
          <ThemeProvider theme={buttonThemeGreen}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                goToPage(PageNames.Login)
              }}
            >
              Create new account
            </Button>
          </ThemeProvider>
        </S.CreateNewText>
        <S.Line />
      </S.CreateNew>
    </S.ContentContainer>
  )
}

export default Login
