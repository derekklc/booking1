import React from "react"

import * as S from "./about.styles"
import PageHeaderA from "../../molecules/PageHeaderA"

const AboutUs = () => {
    return (
        <S.ContentContainer>
            <PageHeaderA title="About Us" />
            <S.AboutBody>
                <S.PageTitle>About HerbCure</S.PageTitle>
                <S.AboutParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </S.AboutParagraph>
            </S.AboutBody>
        </S.ContentContainer>
    )
}

export default AboutUs
