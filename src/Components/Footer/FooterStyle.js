import styled from "styled-components";


export  const Container = styled.div`
background-color: #000000;
height: 400px;
width: 100vw;
color: white;
display: flex;
justify-content: center;
@media screen and (max-width:760px){
background-color: #000000;
height: 840px;
width: 100vw;
color: white;
display: flex;
justify-content: center;

`

export  const FoContainer = styled.div`
height: 400px;
width: 90vw;
display: flex;
flex-direction: column;
@media screen and (max-width:760px){
height: 800px;
width: 90vw;
display: flex;
flex-direction :column ;
}

`
export const HolderContain = styled.div`
width: 90vw;
display: flex;
justify-content: space-between;

@media screen and (max-width:760px){
    display: flex;
    flex-direction: column;
}


` 

export  const FirstContain = styled.div`
margin-top: 60px;
width: 50%;
display: flex;
justify-content: space-between;
@media screen and (max-width:760px){
margin-top: 60px;
width: 50%;
display: flex;
justify-content: space-between;
 flex-direction: column;

}
`


export const SpotifyLogo = styled.div`
display: flex;
width: 85px;
justify-content: space-between;
justify-content: center;
justify-content: space-between;
`

export const Image = styled.img`
height: 30px;
width: 30px;
border-radius: 100%;
background-color: white;
`

export const LogoContent = styled.div`
font-weight: bold;
font-size: 15px;
`
export const TextContent = styled.div`
 display: flex;
 width: 480px;
 cursor: pointer;
 justify-content: space-evenly;
 @media screen and (max-width:760px){
    display: flex;
    flex-direction: column;
    cursor: pointer;


 }

 

`

export const CompanyHolder = styled.div`
@media screen and (max-width:760px){
  margin-top: 16px;


 }
 
`

export const CompanyTitle = styled.div`
 font-size: 14px;
  margin-bottom: 16px;
  @media screen and (max-width:760px){
    font-size: 10px;
  margin-bottom: 16px;
  font-weight: lighter;

 }
`

export const CompanyText = styled.div`
color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight: bold;
  @media screen and (max-width:760px){
    color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 12px;
  font-weight: bold;

 }
 &:hover {
    color: #1ED760;

 }

`

export const CommunitiesHolder = styled.div``

export const CommunitiesTitle = styled.div`
font-size: 14px;
  margin-bottom: 16px;
  font-weight: lighter;
  @media screen and (max-width:760px){
    font-size: 10px;
  margin-top:50px;
  font-weight: lighter;

 }
 
`

export const CommunitiesText = styled.div`
color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    color: #1ED760;

 }

`

export const UsefulLinkHolder = styled.div``

export const UsefulTitle = styled.div`
font-size: 14px;
font-weight: lighter;
margin-bottom: 16px;
text-transform: uppercase;
@media screen and (max-width:760px){
    font-size: 10px;
  margin-top:50px;
  font-weight: lighter;

 }


`

export const UsefulText = styled.div`
color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight: bold;
  @media screen and (max-width:760px){
    color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 12px;
  font-weight: bold;

 }
 &:hover {
    color: #1ED760;

 }

  `


export  const SecondContain = styled.div`
    display: flex;
    height: 50px;
    width:200px ;
    justify-content: space-between;
    margin-top: 60px;
    @media screen and (max-width:760px){
    display: flex;
    height: 50px;
    width:150px ;
    justify-content: space-between;
    margin-top: 60px;
    }



`
export  const IconHolder = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 44px;
height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: black;
  @media screen and (max-width:760px){
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: black;
  }
`
