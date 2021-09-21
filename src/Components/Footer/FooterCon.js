import React from 'react'
import styled from "styled-components"
import {
    TiWorld
} from "react-icons/ti"

const FooterCon = () => {
    return (
        <Container>
            <ContentHolder>
                <Content>legal</Content>
                <Content>Privacy Center</Content>
                <Content>Cookies</Content>
                <Content>About Ads</Content>
                <Content>AdditionalCAPriVacy Disclosure</Content>
            </ContentHolder>
            <ContentTheme>
                <Theme>
                   <TiWorld/> Usa
                </Theme>
                <Theme> © Osa  {new Date().getFullYear()} AB </Theme>

            </ContentTheme>
        </Container>
    )
}

export default FooterCon

const Container = styled.div`
width: 90vw;
margin-top: 80px;
display: flex;
justify-content: space-between;
@media screen and (max-width: 760px){
    margin-top: 20px;
display: flex;
justify-content: space-between;
}
`

const ContentHolder = styled.div`
display: flex;
width: 40%;
justify-content: space-between;
@media screen and (max-width:760px){
display: block;

}

`
const Content = styled.div`
font-size: 10px;
cursor: pointer;
&:hover{
    color: #1ED760;
    
}
`

const ContentTheme = styled.div`


`
const Theme = styled.div`
font-size: 10px;
`

