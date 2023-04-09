import { useEffect, useState } from "react"

import Image from "next/image"

import * as S from "./products.styles"

import PageHeaderA from "../../molecules/PageHeaderA"
import { products as createMockProducts } from "../../../mocks/products"

const renderProductList = (products) => {
  return (
    <S.ProductsList>
      {products?.map((item, index) => {
        return (
          <S.ProductNode key={`products-${item.name}-${index}`}>
            <div>{item.name}</div>
            <S.ProductImage>
              <Image
                src={item.image}
                alt="product image"
                width={100}
                height={100}
              />
            </S.ProductImage>
            <S.ProductName>{item.name}</S.ProductName>
            <S.ProductDescription>{item.description}</S.ProductDescription>
            <S.ProductPrice>{`${item.currency} $${item.price}`}</S.ProductPrice>
          </S.ProductNode>
        )
      })}
    </S.ProductsList>
  )
}

const Products = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    setProductList(createMockProducts(10))
  }, [])
  return (
    <S.ContentContainer>
      <PageHeaderA title="Herbal Products" />
      <S.ProductsBody>
        <S.ProductsTitle>Products</S.ProductsTitle>
        <S.DivisionLine />
        {renderProductList(productList)}
      </S.ProductsBody>
    </S.ContentContainer>
  )
}

export default Products
