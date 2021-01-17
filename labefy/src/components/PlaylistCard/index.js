import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`

display: flex;
align-items:center;

`

const NameContainer = styled.p`
margin: 10px;
color: rgba(0,0,0,0.6);
display:flex;
flex-direction:column;
font-weight:bolder;
font-style: oblique; 
`

const DeleteButton = styled.button`
width:130px;
outline-style: none;
border:none;
font-size:16px;
border-radius:100px;
color: rgba(0,0,0,0.6);
margin-left:20px;
   
`
const Button = styled.button`
width:110px;
outline-style: none;
border:none;
font-size:16px;
border-radius:100px;
color: rgba(0,0,0,0.6);

`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <NameContainer>{props.name}</NameContainer>
            <Button onClick={() => props.changePage("playlistDetail", props.playlistId)}>Abrir playlist</Button>
            <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)} >Excluir Playlist</DeleteButton>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard