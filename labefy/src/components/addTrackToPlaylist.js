import React from 'react'
import axios from "axios";
import { axiosConfig, urlConfig } from "./axiosConfig";

export default class AddTrackToPlaylist extends React.Component {

    state = {
        tracks: []
    }
    componentDidMount = () => {
        this.getPlaylistTracks()
    }

    getPlaylistTracks = () => {
        axios.get(urlConfig, axiosConfig)
            .then((res) => {
                this.setState({ tracks: res.data })
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    addTrackToPlaylist = () => {
        const body = {
            name: "",
            artist: "",
            url: ""
        }
        axios.post(urlConfig, body, axiosConfig)
    }
    render() {
        return (
            <div>
                {this.state.tracks.map((track) => {
                    return (
                        <div>
                            <p>{track.name}</p>
                            <p>{track.artista}</p>
                            <audio src={'http://spoti4.future4.com.br/1.mp3 '}>
                            </audio>
                        </div>
                    )
                })}
            </div>
        )
    }
}

