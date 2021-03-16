import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../axios/axiosConfig';
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import { Container, Title, Input, Button, ButtonSingUp } from './styled';
import { goToSingUp, goToPostsList } from '../../route/cordinator';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Login({ changeButton, setChangeButton }) {

    const [form, onChange, clear] = useForm({ email: "", password: "" });
    


    const history = useHistory();


    useLayoutEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            history.push("/");
        }
    }, [history]);

    const login = (event) => {

        event.preventDefault();
        clear()


        axios.post(`${baseUrl}/login`, form)
        
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


            <Title>Log In </Title>
            <form onSubmit={login}>
                <Input
                    name='email'
                    value={form.email}
                    onChange={onChange}
                    type={'email'}
                    placeholder={'Email'}
                    required>
                </Input>

                <Input
                    name='password'
                    value={form.password}
                    onChange={onChange}
                    type={'password'}
                    placeholder={'Password'}
                    required>
                </Input>
                <Button type={'submit'}>Log In</Button>
               

            </form>

            <ButtonSingUp onClick={() => goToSingUp(history)}>Sing Up</ButtonSingUp>

        </Container>
    );
}
