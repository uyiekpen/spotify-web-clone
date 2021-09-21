import React from 'react'
import {
    RiFacebookCircleLine,
    RiInstagramLine,
    RiTwitterLine
} from "react-icons/ri"


import {
    Container,
    FoContainer,
    HolderContain,
    FirstContain,
    SecondContain,
    SpotifyLogo,
    Image,
    LogoContent,
    TextContent,
    CompanyHolder,
    CompanyTitle,
    CompanyText,
    CommunitiesHolder,
    CommunitiesTitle,
    CommunitiesText,
    UsefulLinkHolder,
    UsefulTitle,
    UsefulText,
    IconHolder,
    


} from "./FooterStyle"
import FooterCon from "./FooterCon"


const Footer = () => {
    return (
        <Container>
            <FoContainer>
               <HolderContain>
               <FirstContain>
                    <SpotifyLogo>
                        <Image/>
                        <LogoContent> Spotify</LogoContent>
                    </SpotifyLogo>

                    <TextContent>
                        <CompanyHolder>
                            <CompanyTitle>COMPANY</CompanyTitle>
                            <CompanyText>About</CompanyText>
                            <CompanyText>Jobs</CompanyText>
                            <CompanyText>For the Record</CompanyText>
                        </CompanyHolder>

                        <CommunitiesHolder>
                            <CommunitiesTitle>COMMUNITIES</CommunitiesTitle>
                            <CommunitiesText>for artist</CommunitiesText>
                            <CommunitiesText>Developers</CommunitiesText>
                            <CommunitiesText>Advertising</CommunitiesText>
                            <CommunitiesText>investor</CommunitiesText>
                            <CommunitiesText>Vendor</CommunitiesText>
                        </CommunitiesHolder>

                        <UsefulLinkHolder>
                           <UsefulTitle>Useful link</UsefulTitle>
                           <UsefulText>Support</UsefulText>
                           <UsefulText>web player</UsefulText>
                           <UsefulText>Free mobile app</UsefulText>
                        </UsefulLinkHolder>
                    </TextContent>
                </FirstContain>
                <SecondContain>
                    <IconHolder>
                        <RiFacebookCircleLine/>
                    </IconHolder>
                    <IconHolder>
                        <RiInstagramLine/>
                    </IconHolder>
                    <IconHolder>
                        <RiTwitterLine/>
                    </IconHolder>
                </SecondContain>
               </HolderContain>
                <FooterCon/>

                
            </FoContainer>
            
            
        </Container>
    )
}

export default Footer

