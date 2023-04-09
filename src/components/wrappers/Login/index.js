import { useRef, useState } from "react"
import { useRouter } from "next/router"

import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material"
import { green } from "@mui/material/colors"
import Input from "@mui/joy/Input"

import * as S from "./Login.styles"

import { useAuth } from "tt/context/AuthContext"
import { PageNames } from "tt/constants"

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("")
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { login } = useAuth()

  const router = useRouter()
  const goToPage = (pageUrl) => {
    router.push(pageUrl)
  }

  const buttonThemeGreen = createTheme({
    palette: {
      primary: green,
    },
  })

  const handleSignup = async () => {
    const userEmail = document.querySelector("#login-username")?.value
    const userPassword = document.querySelector("#login-password")?.value
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
      <S.BodyContainer>
        <S.Title>Login</S.Title>
        <S.GlassBox>
          <S.FormContainer>
            <form onSubmit={handleSignup}>
              <S.InputBox>
                <label htmlFor="login-username">Username</label>
                <Input
                  id="login-username"
                  type="email"
                  ref={emailRef}
                  placeholder="Username"
                />
              </S.InputBox>
              <S.InputBox>
                <label htmlFor="login-password">Password</label>
                <Input
                  id="login-password"
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                />
              </S.InputBox>

              <S.ButtonsContainer>
                <Button variant="contained" type="submit">
                  Sign In
                </Button>
                <S.CreateNew>
                  <S.CreateNewText>
                    <ThemeProvider theme={buttonThemeGreen}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          goToPage(PageNames.SignUp)
                        }}
                      >
                        Create new account
                      </Button>
                    </ThemeProvider>
                  </S.CreateNewText>
                </S.CreateNew>
              </S.ButtonsContainer>
            </form>
          </S.FormContainer>
        </S.GlassBox>
        {!!loginStatus && (
          <S.StatusBanner theme={{ status: loginStatus }}>
            {loginStatus === "success"
              ? "Login Success!"
              : "Login Failed! Please try agian."}
          </S.StatusBanner>
        )}
      </S.BodyContainer>

      <S.VidContainer>
        <video
          autoPlay
          loop
          muted
          // poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/lotusVid.mp4"
            type="video/mp4"
          />
        </video>
      </S.VidContainer>
    </S.ContentContainer>
  )
}

export default Login
