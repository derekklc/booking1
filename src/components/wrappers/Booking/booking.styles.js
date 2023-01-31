import styled from "styled-components"

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
`

export const PageSection = styled.div`
    width: 96%;
    border-radius: 7px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 0 1px 4px 1px #b5b6c8;
    ${({ theme }) => (theme.hasPadding ? "padding-inline: 7%;" : "")}
`

export const BookingButtonContainer = styled.div`
    align-self: center;
    width: 70%;
    margin-top: 20px;
`

export const InstructionsContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const InstructionsList = styled.ol`
    width: 100%;
    list-style: none;
    counter-reset: my-awesome-counter;
    padding-inline: 20px;
`

export const InstructionNode = styled.li`
    width: 100%;
    counter-increment: my-awesome-counter;
    position: relative;
    &:not(:first-of-type) {
        margin-top: 7px;
    }
    &::before {
        content: counter(my-awesome-counter) ". ";
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-120%, 0);
        color: #ca932e;
    }
`

export const InstructionNodeTitle = styled.p`
    margin: 0;
    color: orange;
    font-weight: 600;
    color: #ca932e;
`

export const InstructionNodeParagraph = styled.p`
    margin-top: 5px;
    margin-bottom: 0;
`

export const DoctorsListContainer = styled.div`
    width: 100%;
`

export const DoctorsListTitle = styled.div`
    min-height: 35px;
    color: white;
    background #393a4b;
    display: flex;
    border-radius: 5px 5px 0 0;
    align-items: center;
    justify-content: center;
`
