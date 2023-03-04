import React from "react"
import * as S from "./buttonA.styles"

const ButtonA = ({ buttonTitle }) => {
    return <S.ContentContainer>{buttonTitle || "Derek"}</S.ContentContainer>
}

export default ButtonA
