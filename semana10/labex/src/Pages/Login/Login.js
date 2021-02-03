import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {loginUrl} from '../../axios/axiosConfig';
import { useHistory } from "react-router-dom";
import { LoginContainer, InputLogin, ButtonLogin } from '../Login/styled'

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)

    if (token) {
      history.push("/trips/list");
    }
  }, [history]);

    const login = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(loginUrl, body)
            .then((res) => {
                console.log(res.data.token)
                localStorage.setItem("token", res.data.token);
                history.push("/trips/list");
            }).catch((err) => {
                    console.log(err)
                })
    }
   


    return (
        <LoginContainer>

            <h2>LOGIN</h2>
            <p>Please enter your e-mail and password:</p>
            <InputLogin
                value={email}
                onChange={onChangeEmail}
                type={'email'}
                placeholder={'Email'}>
            </InputLogin>

            <InputLogin
                value={password}
                onChange={onChangePassword}
                type={'password'}
                placeholder={'Password'}>
            </InputLogin>


            <ButtonLogin onClick={login}>Login</ButtonLogin>

        </LoginContainer>
    );
}

export default LoginPage;