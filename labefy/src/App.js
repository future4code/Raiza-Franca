import React from 'react';
import CreatePlaylist from './components/createPlaylist'
import GetAllPlaylists from './components/getAllPlaylists'
//import AddTrackToPlaylist from './components/addTrackToPlaylist'


export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Labefy</h1>
        <CreatePlaylist/>
        <GetAllPlaylists/>
      
        
      </div>
    )
  }
}
