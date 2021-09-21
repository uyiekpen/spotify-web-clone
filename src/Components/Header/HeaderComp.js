import React,{useState} from 'react'
import styled from "styled-components"
import ListIcon from '@material-ui/icons/List';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const HeaderComp = () => {
    const [isOpen, setIsOpen] = useState(false)



    const onToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Container>
            <ContentHolder>
            <FirstContent>
                <Logo/>
                <LogoContent>
                    Spotify
                </LogoContent>
            </FirstContent>
            <SecondContent>
                <Content>Premuim</Content>
                <Content>Support</Content>
                <Content>Download</Content>
                <Content>|</Content>
                <Content>Signup</Content>
                <ContentLink to = "/login" >Login</ContentLink>
                
            </SecondContent>
            <IconHolder>
                    <ListIcon onClick={() => {
                        onToggle()
                    }}/>
                    {
                        isOpen ? <Sidebar onToggle = {onToggle}/> : null
                    }
                </IconHolder>

            </ContentHolder>
        </Container>
    )
}

export default HeaderComp

const Container = styled.div`
background-color: #000000;
height: 80px;
width: 100vw;
color: white;
display: flex;
justify-content: center;

@media screen and (max-width: 960px) {
background-color: #000000;
height: 60px;
width: 100vw;
color: white;
display: flex;
justify-content: center;
  }
`

const ContentHolder = styled.div`
height: 80px;
width: 90vw;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 960px){
height: 60px;
width: 90vw;
display: flex;
align-items: center;
justify-content: space-between;
}

`

const FirstContent = styled.div`
    height: 80px;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 960px){
     height: 80px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

   
`

const Logo = styled.div`
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 100%;

    @media screen and (max-width: 960px) {
    height: 30px;
    width: 30px;
    background-color: white;
    border-radius: 100%;
    }

`
const LogoContent = styled.div`
font-weight: bold;
font-size: 20px;
@media screen and (max-width: 960px){
font-weight: bold;
font-size: 15px;
}

`

const SecondContent = styled.div`
height: 80px;
width: 450px;
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width : 960px) {
 display: none;
}

`

const Content = styled.div`
font-weight: bold;
font-size: 15px;

`
const IconHolder = styled.div`
color: white;
display: none;
@media screen and (max-width: 960px){
    display: block;
} 

`
const ContentLink = styled(Link)`
text-decoration: none;
color: white;
`
