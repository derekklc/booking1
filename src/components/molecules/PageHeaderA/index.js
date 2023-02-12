import React from "react"

import { sectionId } from "../../../reactiveVariables"
import { PageNames } from "../../../constants"

import * as S from "./pageHeaderA.styles"

const PageHeaderA = ({ title, goBackTo, handleClick }) => {
    const isValidPageName =
        goBackTo && Object.values(PageNames).includes(goBackTo)
    return (
        <S.ContentContainer>
            <S.HeaderLeft
                onClick={() => {
                    if (handleClick) {
                        handleClick()
                    } else if (isValidPageName) {
                        sectionId(goBackTo)
                    } else {
                        sectionId(PageNames.Home)
                    }
                }}
            >{`< Back`}</S.HeaderLeft>
            <S.HeaderMiddle>{title || ""}</S.HeaderMiddle>
            <S.HeaderRight></S.HeaderRight>
        </S.ContentContainer>
    )
}

export default PageHeaderA
