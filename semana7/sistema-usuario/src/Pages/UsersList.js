import React from 'react'
import { usersUrl, usersConfig } from '../components/AxiosConfig'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`

display:flex;
flex-direction:row;
justify-content:center;

`
const Button = styled.button`
width:25px;
height:25px;
margin-left:30px;
margin-top:15px;
display:flex;
align-items:center;
justify-content:center;


`

export default class UsersList extends React.Component {
    state = {
        users: []
    }
    componentDidMount = () => {
        this.getAllUsers()
    }
    getAllUsers = () => {
        axios.get(usersUrl, usersConfig)
            .then((res) => {
                this.setState({ users: res.data })
                this.getAllUsers()
            }).catch((err) => {


            })
    }
    deleteUsers = (id) => {
        axios.delete(`${usersUrl}/${id}`, usersConfig)
            .then((res) => {
                this.getAllUsers()
            }).catch((err) => {

            })
    }
    render() {
        return (

            <div>
                <h2>Lista de Usuários</h2>
                {this.state.users.map((user) => {
                    return (
                        <div>
                            <Container>
                                <p>{user.name}</p>
                                <Button onClick={() => { this.deleteUsers(user.id) }}>x</Button>
                            </Container>
                        </div>

                    )
                })}

            </div>
        )
    }
}
