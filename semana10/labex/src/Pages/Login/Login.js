import React, { useEffect } from 'react';
import axios from 'axios';
import { loginUrl } from '../../axios/axiosConfig';
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import { LoginContainer,FormLogin, InputLogin, ButtonLogin } from '../Login/styled'

export default function LoginPage() {

    const [form, onChange, clear] = useForm({ email: "", password: "" });

    const history = useHistory();


    useEffect(() => {
        const token = localStorage.getItem("token");
        

        if (token) {
            history.push("/trips/list");
        }
    }, [history]);

    const login = (event) => {
        event.preventDefault();
        clear()

        axios.post(loginUrl, form)
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
            <FormLogin onSubmit={login}>
                <InputLogin
                    name='email'
                    value={form.email}
                    onChange={onChange}
                    type={'email'}
                    placeholder={'Email'}>
                </InputLogin>

                <InputLogin
                    name='password'
                    value={form.password}
                    onChange={onChange}
                    type={'password'}
                    placeholder={'Password'}>
                </InputLogin>
                <ButtonLogin>Login</ButtonLogin>
            </FormLogin>

            

        </LoginContainer>
    );
}

