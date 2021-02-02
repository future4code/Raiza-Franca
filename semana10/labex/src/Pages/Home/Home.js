import React from 'react';
import { goToLogin, goToApplicationForm } from '../../routes/Coordinator'
import { useHistory } from "react-router-dom"; 

export default function Home() {

    const history = useHistory();
    return (
        <div>
            <h1>LabeX</h1>
            <h2>LOGIN</h2>
            <button onClick={() => goToLogin(history)}>Login</button>
            <h2>Create an account</h2>
            <button onClick={() => goToApplicationForm(history)}>Create an account</button>

        </div>
    );
}

