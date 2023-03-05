import React from "react"

import * as S from "./booking.styles"

const BookingInstructions = ({ instructions }) => {
  return (
    <S.InstructionsContainer>
      <S.InstructionsList>
        {instructions.map((item, index) => {
          return (
            <S.InstructionNode
              key={`booking-instruction-${item.title}-${index}`}
            >
              <S.InstructionNodeTitle>{item.title}</S.InstructionNodeTitle>
              <S.InstructionNodeParagraph>
                {item.paragraph}
              </S.InstructionNodeParagraph>
            </S.InstructionNode>
          )
        })}
      </S.InstructionsList>
    </S.InstructionsContainer>
  )
}

export default BookingInstructions
