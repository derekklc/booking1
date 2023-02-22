import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import * as S from "./facade.styles";

const Facade = ({ facadeClick }) => {
  return (
    <S.ContentContainer hideFacade={false}>
      <S.FacadeContainer>
        <S.FacadeImg src="https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/tents.jpeg" />
      </S.FacadeContainer>
      <S.BodyContainer>
        <S.PageTitle>HerbCure</S.PageTitle>
        <S.Text>Enter</S.Text>
        <S.ButtonContainer
          onClick={() => {
            if (facadeClick) {
              facadeClick();
            }
          }}
        >
          <FontAwesomeIcon
            icon={icon({ name: "chevron-right", style: "solid" })}
          />
        </S.ButtonContainer>
      </S.BodyContainer>
    </S.ContentContainer>
  );
};

export default Facade;
