import styled from "styled-components"

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
`

export const BGCircle = styled.div`
    position: fixed;
    height: 120vw;
    width: 120vw;
    border-radius: 50%;
    top: -75vw;
    left: -10vw;
    background: #393a4b;
    z-index: -1;
`

export const Title = styled.h1`
    margin-top: 35px;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: normal;
    width: 50%;
    color: white;
`

export const LogoContainer = styled.div`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    font-weight: 500;
    font-size: 15px;
    box-shadow: 0 4px 4px 2px darkgrey;
`
