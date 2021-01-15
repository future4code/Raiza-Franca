import React from 'react'
import axios from "axios";
import { axiosConfig, baseUrl, UrlDel } from "./axiosConfig";


export default class GetAllPlaylists extends React.Component {
    state = {
        playlists:[]
    }
    componentDidMount = () => {
        this.GetAllPlaylists();
    };

    GetAllPlaylists = () => {
        axios.get(baseUrl,axiosConfig)
            .then((resposta) => {
                this.setState({ playlists: resposta.data.result.list });
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    deletePlaylist = (id) => {
        axios.delete(`${UrlDel}/${id}`, axiosConfig)
            .then((res) => {
                this.GetAllPlaylists()
                console.log(res)
            })
            .catch((err) => {
                console.log(err)

            })
    }

    render() {
        
        return (
            <div>
                {this.state.playlists.map((playlist)=>{
                    return(
                        <div>
                            <p>{playlist.name}</p>
                            <button onClick={()=>{this.deletePlaylist(playlist.id)}}>x</button>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}
