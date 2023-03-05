import * as S from "./Login.styles"

const Login = () => {
  return (
    <S.ContentContainer>
      <S.Title>Login</S.Title>
      <S.FormContainer>
        <div>
          <label for="login-username">Username</label>
          <input id="login-username" type="text" />
        </div>
        <div>
          <label for="login-password">Username</label>
          <input id="login-password" type="password" />
        </div>
      </S.FormContainer>
      <S.LoginButton>Sign In</S.LoginButton>
      <S.CreateNew>
        <S.Line />
        <S.CreateNewText>Create Account</S.CreateNewText>
        <S.Line />
      </S.CreateNew>
    </S.ContentContainer>
  )
}

export default Login
