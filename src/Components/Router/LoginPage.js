import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import styled from "styled-components"
import  {app} from "./base"

function LoginPage() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const Signup =async()=>{
        await app.auth().createUserWithEmailAndPassword(email, password)
    }
    return (
        <Container>
            <Wrapper>
                <span>Register</span>
               
            <Input 
            type="text" 
            placeholder="Email" 
            value={email}
            onChange={
                (e)=>{
                    setEmail(e.target.value)
                }
            }
            />
            <Input.Password 
            type="password"
             placeholder="password"
             value={password}
             onChange={
                (e)=>{
                    setPassword(e.target.value)
                }
            }
             />
            <Button
            onClick={
                ()=>{
                    console.log(email,password)
                    Signup()
                }
            }
            >Submit</Button>
            </Wrapper>

        </Container>
           
            
    
    )
}

export default LoginPage

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
width: 300px;
height: 150px;
background-color: grey;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
color:white;
justify-content: space-around;

`
