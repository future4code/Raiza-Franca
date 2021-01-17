import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`

display: flex;
flex-direction: column;
margin-right:800px;
align-items: center;

    div {
        display: flex;
        align-items: center;
    }
`

const TrackContainer = styled.h4`
color: rgba(0,0,0,0.6);
display:flex;
flex-direction:column;
font-weight:bolder;
font-style: oblique;
`

const ArtistContainer = styled.p`

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
const Audio = styled.audio`

width:200px;
height:30px;
`

const TrackCard = (props) => {
    return (
        <TrackCardContainer>
            <div>
                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>
                <DeleteButton  
                    onClick={() => props.removeTrackFromPlaylist(props.trackId)}
                >
                    Excluir Música
                </DeleteButton>
            </div>
            <Audio controls="controls"> 
                <source src={props.url} type="audio/ogg" />
            </Audio>
        </TrackCardContainer>
    )
}

export default TrackCard