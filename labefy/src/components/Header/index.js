import React from "react";
import styled from "styled-components";


const Title = styled.h1`
color: rgba(0,0,0,0.6);
margin-bottom:30px;
font-style: oblique;
`

const HeaderContainer = styled.div`
height: 100px;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:100px;

`

const ButtonsContainer = styled.div`
width: 500px;
display: flex;
justify-content: space-between;
    
`
const Button =styled.button`
width:200px;
outline-style: none;
border:none;
font-size:16px;
border-radius:100px;
color: rgba(0,0,0,0.6);

`

const Header = (props) => {
    return (
        <HeaderContainer>
            <Title>Labefy</Title>
            <ButtonsContainer>
                <Button onClick={() => props.changePage("playlistCreationPage")} >Cadastrar Playlist</Button>
                <Button onClick={() => props.changePage("playlistManagerPage")} >Gerenciar Playlists</Button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header