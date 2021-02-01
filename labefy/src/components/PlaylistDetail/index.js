import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackCard from "../TrackCard/TrackCard";
import { baseUrl, axiosConfig } from "../../constants";

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackCreationForm = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction:column;

    div {
        display: flex;
        flex-direction: column;
    }
`
const Input = styled.input`
width:250px;
height:30px;
margin:10px;
border:none;
outline-style: none;
text-align:center;
border-radius:50px;

`
const Button =styled.button`
width:200px;
outline-style: none;
border:none;
font-size:16px;
border-radius:100px;
color: rgba(0,0,0,0.8);

`
const Button2 =styled.button`
width:200px;
outline-style: none;
border:none;
font-size:16px;
border-radius:100px;
color: rgba(0,0,0,0.8);

`
class PlaylistDetail extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    };

    componentDidMount = () => {
        this.fetchTracks()
    };

    fetchTracks = () => {
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(response => {
            this.setState({tracks: response.data.result.tracks})
        }).catch(err => {
            console.log(err)
        });
    };

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err);
        });
    };

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    addTrackToPlaylist = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        };

        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`,
            body,
            axiosConfig
        ).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err);
        });

        this.setState({
            trackName: "",
            artist: "",
            url: ""
        })
    };

    render () {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard 
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })

        return (
            <PlaylistDetailContainer>
                <TrackCreationForm onSubmit={this.addTrackToPlaylist} >
                    <div>
                        
                        <Input 
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        
                        <Input 
                            placeholder="Nome do Artista"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        
                        <Input 
                            placeholder="URL da música"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <Button2 type="submit" >Adicionar música</Button2>
                </TrackCreationForm>
                {tracks}
                <Button onClick={() => this.props.changePage("playlists", "")} >Voltar para playlists</Button>
            </PlaylistDetailContainer>
        )
    };
};

export default PlaylistDetail