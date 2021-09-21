import React,{useState} from 'react'
import styled from "styled-components"
import {AiOutlineLine} from "react-icons/ai"
import {GiCancel} from "react-icons/gi"
import {Link} from "react-router-dom"


const Sidebar = ({onToggle}) => {  
    
    return (
        <Container >
            <SidebarHolder>
                <IconHolder>
                    <GiCancel onClick={onToggle}/>
                </IconHolder>

            <SideBarContent>
                <Content>Premuim</Content>
                <Content>Support</Content>
                <Content>Download</Content>
                <Content><AiOutlineLine/></Content>
                <ContentSign>Signup</ContentSign>
                <ContentSign to="/Login">Login</ContentSign>
                
            </SideBarContent>
            
            </SidebarHolder>
            
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
position: fixed;
width: 100%;
height: 100%;
background-color: black;
z-index: 10;
top: 0;
left: 0;
display: flex;
justify-content: center;



`

const SidebarHolder = styled.div`
width: 90vw;
height: 100%;
margin-top: 20px;



`
const IconHolder = styled.div`
display: flex;
width: 90vw;
justify-content: flex-end;
font-size: 30px;

`

const SideBarContent = styled.div`
font-size: 30px;
margin-top: 0.5rem;

`

const Content = styled.div`
display: flex;
flex-direction: row;

`

const ContentSign = styled(Link)`
margin-top: 10px;
margin-top: 0.5rem;

font-size: 20px;
font-weight: lighter;
`