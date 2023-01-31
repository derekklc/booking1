import styled from "styled-components"

export const ContentContainer = styled.div`
    padding-inline: 10%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 5vw 6vw;
    width: 70%;
    margin-inline: auto;
`

export const MenuNode = styled.div`
    background: white;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 5px;
    box-shadow: 0 2px 4px 1px darkgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 20px;
    > * {
        max-width: 80%;
    }
`

export const svgIcon = styled.i`
    width: 30px;
    height: 30px;
    margin-top: 30px;
    > svg {
        height: 100%;
        width: 100%;
        fill: #5f628b;
    }
`

export const menuLabel = styled.p`
    margin: 0;
    text-align: center;
`
