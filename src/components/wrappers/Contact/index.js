import React from "react"

import PageHeaderA from "../../molecules/PageHeaderA"

import * as S from "./contact.styles"

const ContactUs = () => {
    return (
        <S.ContentContainer>
            <PageHeaderA title="Contact Us" />
            <S.ContactBody>Contact Us</S.ContactBody>
        </S.ContentContainer>
    )
}

export default ContactUs
