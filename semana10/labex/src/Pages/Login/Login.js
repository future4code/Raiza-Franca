import React from 'react';
import {goToCreateTrip} from '../../routes/Coordinator'
import { useHistory } from "react-router-dom"; 

function LoginPage() {

    const history = useHistory();
    return (
        <div>
            <h1>LabeX</h1>
            <h2>LOGIN</h2>
            <p>Please enter your e-mail and password:</p>
            <input placeholder={'Email'}></input>
            <input placeholder={'Password'}></input>
            <button onClick={() => goToCreateTrip(history)}>Login</button>
           
        </div>
    );
}

export default LoginPage;