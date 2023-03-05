import react from "react"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro" // <-- import styles to be used

// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link"

import * as S from "./facade.styles"

const Facade = () => {
  return (
    <S.ContentContainer hideFacade={false}>
      <S.FacadeContainer>
        <S.FacadeImg src="https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/tents.jpeg" />
      </S.FacadeContainer>
      <S.BodyContainer>
        <S.PageTitle>HerbCure</S.PageTitle>
        <S.Text>Enter</S.Text>
        <Link href="/home">
          <S.ButtonContainer onClick={() => {}}>{">"}</S.ButtonContainer>
        </Link>
        {/* <FontAwesomeIcon
            icon={icon({ name: "chevron-right", style: "solid" })}
          /> */}
      </S.BodyContainer>
    </S.ContentContainer>
  )
}

export default Facade
