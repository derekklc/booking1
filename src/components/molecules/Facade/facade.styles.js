import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
`;

export const FacadeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FacadeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BodyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  font-family: monospace;
  letter-spacing: 3px;
  color: white;
  margin-bottom: 50svh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #393a4b;
  box-shadow: 0 0px 8px 4px darkgrey;
  cursor: pointer;
  transition: transform 0.5s;
  svg {
    height: 22px;
    width: 22px;
    path {
      fill: white;
    }
  }
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: monospace;
  color: white;
`;
