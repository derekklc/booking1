import styled from "styled-components"

export const ContentContainer = styled.div`
    width: 100%;
    min-height: 35px;
    background: #393a4b;
    color: white;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

export const HeaderLeft = styled.div`
    width: 100%;
    padding-left: 10px;
    user-select: none;
    cursor: pointer;
`

export const HeaderMiddle = styled.p`
    width: 100%;
    margin: 0;
    text-align: center;
`

export const HeaderRight = styled.div`
    width: 100%;
`
