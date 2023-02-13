import styled from "@emotion/styled"

// const colorBase = `rgba(57, 58, 75,`
const colorBase = `rgba(100, 107, 216,`

const loaderStyles = `
    .loader {
        width: 8px;
        height: 8px;
        position: relative;
        border-radius: 50%;
        background: #fff;
        animation: wave 1s ease-in infinite;
    }
  
    @keyframes wave {
        0% {  box-shadow:
            0 0 0 0px ${colorBase} 1),
            0 0 0 20px ${colorBase} 0.2),
            0 0 0 40px ${colorBase} 0.6),
            0 0 0 60px ${colorBase} 0.4),
            0 0 0 80px ${colorBase} 0.2)
        }
        100% {  box-shadow:
            0 0 0 80px ${colorBase} 0),
            0 0 0 60px ${colorBase} 0.2),
            0 0 0 40px ${colorBase} 0.4),
            0 0 0 20px ${colorBase} 0.6),
            0 0 0 0px ${colorBase} 1)
        }
    }  
`

export const ContentContainer = styled.div`
    height: 120%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    position: absolute;
    z-index: 1;
    top: -10%;
    transform: translate(-50%, 0);
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(1px);
        background: #ffffff4b;
        z-index: 1000;
    }
    background: ${colorBase} 0.1);
    ${loaderStyles}
`
