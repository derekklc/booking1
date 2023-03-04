import React from "react"

import * as S from "./products.styles"

import PageHeaderA from "../../molecules/PageHeaderA"
import { products } from "../../../mocks/products"

const renderProductList = () => {
    return (
        <S.ProductsList>
            {products(10)?.map((item) => {
                return (
                    <S.ProductNode>
                        <S.ProductImage>
                            <img src={item.image} />
                        </S.ProductImage>
                        <S.ProductName>{item.name}</S.ProductName>
                        <S.ProductDescription>
                            {item.description}
                        </S.ProductDescription>
                        <S.ProductPrice>{`${item.currency} $${item.price}`}</S.ProductPrice>
                    </S.ProductNode>
                )
            })}
        </S.ProductsList>
    )
}

const Products = () => {
    console.log("products", products(3))
    return (
        <S.ContentContainer>
            <PageHeaderA title="Herbal Products" />
            <S.ProductsBody>
                <S.ProductsTitle>Products</S.ProductsTitle>
                <S.DivisionLine />
                {renderProductList(products)}
            </S.ProductsBody>
        </S.ContentContainer>
    )
}

export default Products
