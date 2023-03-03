import React from "react"

import * as S from "./BottomBar.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { sectionId } from "../../../reactiveVariables"
import { PageNames } from "../../../constants"
import {
  faMessage,
  faUser,
  faCalendarDays,
} from "@fortawesome/free-regular-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

import { fireStore } from "../../../utils/fire"
import { addDoc, collection } from "@firebase/firestore"

const BottomBar = () => {
  const ref = collection(fireStore, "messages")
  const data = {
    message: "my day has come",
  }
  const barItems = [
    {
      icon: faCalendarDays,
      label: "Bookings",
      handleClick: () => {
        // sectionId(PageNames.Home)
        console.log("fire")
        try {
          addDoc(ref, data)
        } catch (err) {
          console.log("error writing to firestore", err)
        }
      },
    },

    {
      icon: faCartPlus,
      label: "Cart",
      handleClick: () => {
        sectionId(PageNames.Login)
      },
    },

    {
      icon: faMessage,
      label: "Messages",
      handleClick: () => {
        sectionId(PageNames.SignUp)
      },
    },

    {
      icon: faUser,
      label: "Profile",
      handleClick: () => {
        sectionId(PageNames.Login)
      },
    },
  ]

  const renderFields = () => {
    return (
      <S.BarNodesContainer>
        {barItems.map((field) => {
          return (
            <S.BarNode onClick={field.handleClick}>
              {/* <FontAwesomeIcon
                icon={icon({ name: "message", style: "regular" })}
              /> */}

              <FontAwesomeIcon icon={field.icon} />
              <S.BarNodeLabel>{field.label}</S.BarNodeLabel>
            </S.BarNode>
          )
        })}
      </S.BarNodesContainer>
    )
  }

  return <S.ContentContainer>{renderFields()}</S.ContentContainer>
}

export default BottomBar
