import React from "react"

import { homeMocks } from "../../../mocks/home"
import { shape } from "../../../svgs"

import { sectionId } from "../../../reactiveVariables"

import parse from "html-react-parser"

import * as S from "./HomeMenu.styles"

const renderMenus = (changePage) => {
    return (
        <>
            {homeMocks.homeMenu.map((item) => {
                return (
                    <S.MenuNode
                        key={item.pageId}
                        onClick={() => {
                            changePage(item.pageId)
                        }}
                    >
                        {!!item.icon && <S.svgIcon>{parse(shape)}</S.svgIcon>}
                        <S.menuLabel>{item.label}</S.menuLabel>
                    </S.MenuNode>
                )
            })}
        </>
    )
}

const HomeMenu = () => {
    const changePage = (sectionName) => {
        sectionId(sectionName)
    }
    return <S.ContentContainer>{renderMenus(changePage)}</S.ContentContainer>
}

export default HomeMenu
