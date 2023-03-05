import styled from "@emotion/styled"

export const ContentContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  padding-inline: 7px;
  box-sizing: border-box;
  background: white;
`

export const BarNodesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BarNode = styled.div`
  height: 28px;
  margin-bottom: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  user-select: none;
  cursor: pointer;
`

export const BarNodeLabel = styled.p`
  margin: 0;
  height: 100%;
  width: 100%;
  font-size: 10px;
  svg {
    height: 100%;
    width: 100%;
  }
`
