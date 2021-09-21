import React from 'react'
import styled from "styled-components"
import { Button } from 'antd';


const AnotherBody = () => {
    return (
        <Container>
            <ContaineContent>
                <Listen>
                Listening is everything
                </Listen>
                <Millions>
                Millions of songs and podcasts. No credit card needed.
                </Millions>
                <ButtonHolder>
                    <Button > Get 3 Month free</Button>
                </ButtonHolder>
            </ContaineContent>
        </Container>
    )
}

export default AnotherBody


const Container = styled.div`
background-color: #2941AB;
height: 500px;
width: 100vw;
display: flex;
justify-content: center;
@media screen and (max-width:760px){
background-color: #2941AB;
height: 500px;
width: 100vw;
display: flex;
justify-content: center;

}
`

const ContaineContent = styled.div`
margin-top: 80px;
height: 300px;
width: 90vw;
color: #1ED760;
@media screen and (max-width:760px){
height: 300px;
width: 90vw;
color: #1ED760;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

`

const Listen = styled.div`
font-size: 60px;
font-weight: bold;
@media screen and (max-width:760px){
    font-size: 25px;
    font-weight: bold;
}

`
const Millions = styled.div`
font-weight: bold;
margin-top: 20px;
@media screen and (max-width: 760px){
    font-weight: bold;
    margin-top: 20px;
    font-size: 13px;
}


`

const ButtonHolder = styled.div`
margin-top: 40px;
color: #2941AB ;
border: none;
@media screen and (max-width:760px){
    
}



Button {
width: 300px;
height: 60px;
border-radius: 50px;
color: #2941AB ;
font-size: 20px;
font-weight: bold;
background-color:#1ED760 ;
@media screen and (max-width:760px){
width: 300px;
height: 40px;
border-radius: 50px;
color: #2941AB ;
font-size: 20px;
font-weight: bold;
background-color:#1ED760 ;

}

}

& :hover{
    background-color: #1ED760;
    color:#2941AB ;
    border: none;
    @media screen and (max-width:760px){
        background-color: #1ED760;
    color:#2941AB ;
    border: none;
    }


}


`