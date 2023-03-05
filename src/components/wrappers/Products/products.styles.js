import styled from "@emotion/styled"

import { mq } from "../../../utils/styling"

export const ContentContainer = styled.div`
  width: 100%;
`

export const ProductsBody = styled.div`
  width: 95%;
  margin-inline: auto;
`

export const ProductsTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
`

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  row-gap: 7px;
  margin-top: 21px;
  margin-bottom: 21px;
  justify-content: center;
`

export const DivisionLine = styled.div`
  border-top: 1px solid lightgrey;
  height: 0;
  width: 100%;
`

export const ProductNode = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  transition: 0.3s;
  padding: 3px 5px;
  box-sizing: border-box;
  border-radius: 3px;
  :hover {
    box-shadow: 0 0 1px 2px #efefef;
    transform: scale(1.01);
  }
  ${mq(390).up} {
    width: 200px;
  }
`

export const ProductImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border: 1px solid lightgrey;
  cursor: pointer;
  > img {
    height: 100%;
    width: 100%;
  }
`

export const ProductName = styled.p`
  margin: 0;
  cursor: pointer;
`

export const ProductDescription = styled.p`
  margin: 0;
  font-size: 14px;
`

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 14px;
`
