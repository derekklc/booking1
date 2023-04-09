import React, { useRef } from "react"

import { useRouter } from "next/router"
import { useAuth } from "tt/context/AuthContext"

import { PageNames } from "tt/constants"

import * as S from "./SignUp.styles"

const SignUp = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { signup } = useAuth()

  const router = useRouter()
  const goToPage = (page) => {
    if (Object.values(PageNames).includes(page)) {
      router.push(`/${page}`)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    const userEmail = emailRef.current.value
    const userPassword = passwordRef.current.value
    if (!!userEmail && !!userPassword) {
      try {
        await signup(userEmail, userPassword)
      } catch (error) {
        console.log("signup error", error)
      }
    }
  }

  return (
    <S.ContentContainer>
      <S.Title>Sign up</S.Title>
      <S.FormContainer>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="login-username">Username</label>
            <input id="login-username" type="email" ref={emailRef} />
          </div>
          <div>
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" ref={passwordRef} />
          </div>
          <S.LoginButton>Sign up</S.LoginButton>
        </form>
      </S.FormContainer>
      <S.CreateNew>
        <S.Line />
        <S.CreateNewText>
          <button onClick={() => goToPage(PageNames.Login)}>Go to login</button>
        </S.CreateNewText>
        <S.Line />
      </S.CreateNew>
    </S.ContentContainer>
  )
}

export default SignUp
