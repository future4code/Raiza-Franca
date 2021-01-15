import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "./axiosConfig";

export default class CreatePlaylist extends React.Component{
  state = {
       playlistValue: ""
  };

 

  createPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    };

    axios
      .post(
        baseUrl,
        body,
        axiosConfig
      )
      .then((res) => {
        this.setState({ playlistValue: "" });
      
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
 
  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  render() {
   
    return (
      <div>
        <div>
          <input
            placeholder="Nome da Playlist"
            value={this.state.playlistValue}
            onChange={this.onChangePlaylistValue}
          />
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>
       
      </div>
    );
  }
}


