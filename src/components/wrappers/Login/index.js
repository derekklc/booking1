import { useRef, useState } from "react"
import { useRouter } from "next/router"
import * as S from "./Login.styles"

import { useAuth } from "tt/context/AuthContext"
import { PageNames } from "tt/constants"

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("")
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { login } = useAuth()

  const router = useRouter()

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
          <label for="login-username">Username</label>
          <input id="login-username" type="email" ref={emailRef} />
        </div>
        <div>
          <label for="login-password">Password</label>
          <input id="login-password" type="password" ref={passwordRef} />
        </div>
      </S.FormContainer>
      <S.LoginButton onClick={handleSignup}>Sign In</S.LoginButton>
      <S.CreateNew>
        <S.Line />
        <S.CreateNewText>
          <button onClick={() => goToPage(PageNames.Login)}>
            Create new account
          </button>
        </S.CreateNewText>
        <S.Line />
      </S.CreateNew>
    </S.ContentContainer>
  )
}

export default Login
