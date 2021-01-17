import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants";


const PlaylistCreationFormContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
`

const PlaylistCreationForm = styled.form`   
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const Input = styled.input`
width:250px;
height:30px;
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
color: rgba(0,0,0,0.6);

`
class PlaylistCreationPage extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };
    
    render () {
        return (
            <PlaylistCreationFormContainer>
                
                <PlaylistCreationForm onSubmit={this.createPlaylist} >
                    
                    <Input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <Button type="submit">Cadastrar Playlist</Button>
                </PlaylistCreationForm>
            </PlaylistCreationFormContainer>
        );
    };
};

export default PlaylistCreationPage