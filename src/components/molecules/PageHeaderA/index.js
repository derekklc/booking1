import React from "react"

import { sectionId } from "../../../reactiveVariables"
import { PageNames } from "../../../constants"

import * as S from "./pageHeaderA.styles"

const PageHeaderA = ({ title }) => {
    return (
        <S.ContentContainer>
            <S.HeaderLeft
                onClick={() => {
                    sectionId(PageNames.Home)
                }}
            >{`< Back`}</S.HeaderLeft>
            <S.HeaderMiddle>{title || ""}</S.HeaderMiddle>
            <S.HeaderRight></S.HeaderRight>
        </S.ContentContainer>
    )
}

export default PageHeaderA
