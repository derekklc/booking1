import styled from "@emotion/styled"

const FACADE_BUFFER = `10px`

const fadeOutAnimation = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            filter: blur(0);
        }
        100% {
            opacity: 0;
            filter: blur(2px);
        }
    }
`

const slideUpAnimation = `
    @keyframes slideUp {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, -100%);
        }
    }
`

export const ContentContainer = styled.div`
    ${slideUpAnimation}
    ${fadeOutAnimation}
    width: calc(100vw + 2 * ${FACADE_BUFFER});
    height: calc(100vh + 2 * ${FACADE_BUFFER});
    position: fixed;
    top: -${FACADE_BUFFER};
    left: -${FACADE_BUFFER};
    background: white;
    animation: fadeOut 1s forwards;
    animation-delay: 1s;
    ${(theme) => (theme.hideFacade ? `display: none;` : "")}
`

export const FacadeContainer = styled.div`
    width: calc(100vw - 2 * ${FACADE_BUFFER});
    height: calc(100vh - 2 * ${FACADE_BUFFER});
    margin-inline: auto;
    margin-top: calc(2 * ${FACADE_BUFFER});
    transform: scale(0.9);
`

export const FacadeImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
