import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ContainerInformation, Image, Name, Bio, ContainerButton, ButtonX, ButtonS2 } from '../Styleds/styledInitialPage.js';
import LogoImg from '../img/heart.svg';
import { ContainerHeader, Logo, Button, LogoImage } from '../Styleds/StyledHeader.js';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { urlBase, ChoosePersonUrl } from '../axios/AxiosConfig'





function InitialPage(props) {

    const [profile, setProfile] = useState({})




    useEffect(() => {
        getAllProfiles()
    }, [])

    


    const getAllProfiles = () => {
        axios.get(urlBase)
            .then((res) => {
                setProfile(res.data.profile)
                
            }).catch((err) => {

            })
    }


    const ChoosePerson = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios.post(ChoosePersonUrl, body)
            .then((res) => {
                
                getAllProfiles()

            })
            .catch((err) => {

            })
    }

    const NoChoosePerson = () => {
        const body = {
            id: profile.id,
            choice: false
        }
        axios.post(ChoosePersonUrl, body)
            .then((res) => {
                
                getAllProfiles()

            })
            .catch((err) => {

            })
    }

    return (

        <Container>
            <ContainerHeader>
                <Logo>AstroMach
                    <LogoImage src={LogoImg}></LogoImage>
                </Logo>
                <Button onClick={props.changePage}>

                    <HowToRegIcon />
                </Button>
            </ContainerHeader>
            <ContainerInformation>

                <Image src={profile.photo}></Image>
                <Name>{profile.name}, {profile.age}</Name>

                <Bio>{profile.bio}</Bio>
            </ContainerInformation>


            <ContainerButton>

                <ButtonX onClick={() => NoChoosePerson(profile.id)}>x</ButtonX>
            <ButtonS2 onClick={() => ChoosePerson(profile.id)}>♥️</ButtonS2>
            </ContainerButton>

            

        </Container >

    )
}
export default InitialPage