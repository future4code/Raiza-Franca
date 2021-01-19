import axios from 'axios';
import React from 'react';
import { usersUrl, usersConfig } from '../components/AxiosConfig'
import styled from 'styled-components'

const Container = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

`
const InputName = styled.input`
width:100px;
`
const InputEmail = styled.input`
width:200px;
`
const Button = styled.button`
width:100px;
height:30px;
margin:20px 0;

`

export default class RegisterUsers extends React.Component {
    state = {
        inputValueName: '',
        inputValueEmail: ''

    }



    onchangeValueName = (event) => {
        this.setState({ inputValueName: event.target.value })
    }
    onchangeValueEmail = (event) => {
        this.setState({ inputValueEmail: event.target.value })
    }
    createUser = () => {
        const body = {
            name: this.state.inputValueName,
            email: this.state.inputValueEmail
        }
        axios.post(usersUrl, body, usersConfig)
            .then((res) => {

                alert('Usuário cadastrado com Sucesso')
            }).catch((err) => {

                alert('Não foi possivel cadastrar o usuario')
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <h2>Cadastro</h2>
                    <p>Nome:</p>
                    <InputName
                        value={this.state.inputValueName}
                        onChange={this.onchangeValueName}
                    />
                    <p>Email:</p>
                    <InputEmail
                        value={this.state.inputValueEmail}
                        onChange={this.onchangeValueEmail}
                    />
                    <Button onClick={this.createUser}>Cadastrar</Button>
                </Container>
            </div>
        )
    }
}