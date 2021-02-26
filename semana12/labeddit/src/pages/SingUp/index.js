import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../axios/axiosConfig';
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import { goToPostsList } from '../../route/cordinator'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Title, Input, Button } from './styled'

export default function SingUp({changeButton, setChangeButton}) {

    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
    
    const history = useHistory();


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            history.push("/");
        }
    }, [history]);

    const singUp = (event) => {
        event.preventDefault();
        console.log(form)
        clear()
        

        axios.post(`${baseUrl}/signup`, form)
       
            .then((res) => {
                
                localStorage.setItem("token", res.data.token);
                history.push("/");
                setChangeButton('Logout')
            }).catch((err) => {
                alert(err.response.data.message)
                
            })
    }



    return (
        <Container>

           
            <Title>Sing Up </Title>
            <form onSubmit={singUp}>
                <Input
                    name='username'
                    value={form.username}
                    onChange={onChange}
                    type={'text'}
                    placeholder={'username'}>
                </Input>
                <Input
                    name='email'
                    value={form.email}
                    onChange={onChange}
                    type={'email'}
                    placeholder={'Email'}>
                </Input>

                <Input
                    name='password'
                    value={form.password}
                    onChange={onChange}
                    type={'password'}
                    placeholder={'Password'}>
                </Input>

                <Button type={'submit'}> Sing Up</Button>
            </form>



        </Container>
    );
}
