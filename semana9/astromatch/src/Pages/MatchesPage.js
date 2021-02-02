import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '../Styleds/styledInitialPage.js';
import LogoImg from '../img/heart.svg';
import { GetMatchesUrl, GetClearUrl } from '../axios/AxiosConfig';
import { ContainerHeader, Logo, Button, LogoImage } from '../Styleds/StyledHeader.js';
import { MatchesList, Avatar, Name } from '../Styleds/StyledMatchPage.js';
import ReplyAllSharpIcon from '@material-ui/icons/ReplyAllSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';





function MatchesPage(props) {

    const [matches, setMatches] = useState([])


    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(GetMatchesUrl)
            .then((res) => {
                setMatches(res.data.matches)


            }).catch((err) => {


            })
    }

    const getClear = () => {
        axios.put(GetClearUrl)
            .then((res) => {


            }).catch((err) => {


            })
    }
    return (
        <div>



            <Container>
                <ContainerHeader>
                    <Button onClick={props.changePage}>
                        <ReplyAllSharpIcon />

                    </Button>
                    <Logo>
                        AstroMach
                        <LogoImage src={LogoImg}></LogoImage>
                    </Logo>

                    <Button onClick={getClear}>
                        <DeleteForeverIcon />
                    </Button>
                </ContainerHeader>

                {matches.map((match) => {
                    return (
                        <MatchesList>
                            <Avatar src={match.photo}></Avatar>
                            <Name>{match.name}</Name>
                        </MatchesList>
                    )
                })}






            </Container>

        </div>

    )
}
export default MatchesPage