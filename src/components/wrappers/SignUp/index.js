import React, { useRef, useState } from "react"

import Button from "@mui/material/Button"
import Input from "@mui/joy/Input"
import { createTheme, ThemeProvider } from "@mui/material"
import { green } from "@mui/material/colors"

import { useRouter } from "next/router"
import { useAuth } from "tt/context/AuthContext"

import { PageNames } from "tt/constants"

import * as S from "./SignUp.styles"

const buttonThemeGreen = createTheme({
  palette: {
    primary: green,
  },
})

const SignUp = () => {
  const [signUpStatus, setSignUpStatus] = useState("")
  console.log("signUpStatus: ", signUpStatus)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { signup } = useAuth()

  const router = useRouter()
  const goToPage = (page) => {
    if (Object.values(PageNames).includes(page)) {
      router.push(`/${page}`)
    }
  }

  const handleSignup = async () => {
    const userEmail = document.querySelector("#signup-username")?.value
    const userPassword = document.querySelector("#signup-password")?.value
    if (!!userEmail && !!userPassword) {
      try {
        await signup(userEmail, userPassword)
        setSignUpStatus("success")
      } catch (error) {
        setSignUpStatus("error")
        console.log("signup error", error)
      }
    }
  }

  return (
    <S.ContentContainer>
      <S.BodyContainer>
        <S.Title>Sign up</S.Title>
        <S.GlassBox>
          <S.FormContainer>
            <form onSubmit={handleSignup}>
              <S.InputBox>
                <label htmlFor="signup-username">Username</label>
                <Input
                  id="signup-username"
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Username"
                />
              </S.InputBox>
              <S.InputBox>
                <label htmlFor="signup-password">Password</label>
                <Input
                  id="signup-password"
                  type="password"
                  name="password"
                  ref={passwordRef}
                  placeholder="Password"
                />
              </S.InputBox>
              <S.ButtonsContainer>
                <Button type="submit" variant="contained">
                  Sign up
                </Button>

                <S.RedirectButton>
                  <ThemeProvider theme={buttonThemeGreen}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        goToPage(PageNames.Login)
                      }}
                    >
                      Login instead
                    </Button>
                  </ThemeProvider>
                </S.RedirectButton>
              </S.ButtonsContainer>
            </form>
          </S.FormContainer>
        </S.GlassBox>
        {!!signUpStatus && (
          <S.StatusBanner theme={{ status: signUpStatus }}>
            {signUpStatus === "success"
              ? "Sign up Success!"
              : "Sign up failed! Please try agian."}
          </S.StatusBanner>
        )}
      </S.BodyContainer>
      <S.VidContainer>
        <video autoPlay loop muted>
          <source
            src="https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/lotusVid.mp4"
            type="video/mp4"
          />
        </video>
      </S.VidContainer>
    </S.ContentContainer>
  )
}

export default SignUp
