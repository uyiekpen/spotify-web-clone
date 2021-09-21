import React from 'react'
import styled from "styled-components"
import img from "../Image/frends.jpg"
import { Button } from 'antd';



const BodyComp = () => {
    return (
        <Container>
            <BodyContent>
                <FirstContent>
                    <SportifyContent>
                        SPOTIFY PREMIUM
                    </SportifyContent>
                    <Sportifypremuim>
                        Get 3 months of Premium for free
                    </Sportifypremuim>
                    <SportifyEnjoy>
                        Enjoy ad-free music listening, offline playback, and more. Cancel anytime.
                    </SportifyEnjoy>
                    <ButtonHolder>
                      <Button > Get 3 Month free</Button>
                    </ButtonHolder>
                </FirstContent>
                <ImageContent>
                    <Image src={img}/>
                </ImageContent>

            </BodyContent>
        </Container>
    )
}

export default BodyComp

const Container = styled.div`
    width: 100vw;
    height: 500px;
    background-color: #B22C15;
    display: flex;
    justify-content: center;
    @media screen and (max-width:760px){
    width: 100vw;
    height: 600px;


    }
    
`

const BodyContent = styled.div`
    display: flex;
    justify-content: space-between;

    width: 90vw;
    @media screen and (max-width: 760px){
        display: flex;
        flex-direction: column;

    
    }
`
const FirstContent = styled.div`
margin-top: 60px;
color: white;
width: 50%;
@media screen and (max-width: 760px){
    display: flex;
    width: 90vw;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;



}

`
const SportifyContent = styled.div`
 font-weight: bold;
 @media screen and (max-width: 760px){
    display: flex;
    justify-content: center;
    font-size: 10px;
}
`

const Sportifypremuim = styled.div`
margin-top: 40px;
font-size: 40px;
font-weight: bold;
@media screen and (max-width: 760px){
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 25px;


}

`

const SportifyEnjoy = styled.div`
margin-top: 40px;
font-size: 17px;
font-weight: bold;
@media screen and (max-width: 760px){
    display: flex;
    justify-content: center;
    font-size: 15px;
    margin-top: 30px;


    
}

`


const ButtonHolder = styled.div`
margin: 40px;

Button {
    width: 300px;
    height: 40px;
    border-radius: 100px;
    color: white;
    background-color: black ;
    border: none;
    font-weight: bold;

    :hover {
    }
}

@media screen and (max-width:760px){
    width: 300px;
    height: 40px;
    border-radius: 100px;
    color: white;
    background-color: black ;
    border: none;
    

}

`

const ImageContent = styled.div`
 height: 500px;
 width: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
`

const Image = styled.img`
margin-bottom: 60px;
height: 300px;
width: 400px;
margin-left: 160px;
background-color: white;
object-fit: cover;
box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
@media screen and (max-width: 760px){
margin-bottom: 60px;
height: 250px;
width: 300px;
margin-left: 160px;
background-color: white;
object-fit: cover;
box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);

}
`