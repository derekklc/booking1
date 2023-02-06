import React, { useState } from "react"

import * as S from "./facade.styles"

const Facade = () => {
    const [hideFacade, setHideFacade] = useState(false)
    setTimeout(() => {
        setHideFacade(true)
    }, 2000)

    return (
        <S.ContentContainer hideFacade={hideFacade}>
            <S.FacadeContainer>
                <S.FacadeImg src="https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/dragon.jpeg" />
            </S.FacadeContainer>
        </S.ContentContainer>
    )
}

export default Facade
