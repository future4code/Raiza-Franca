import React from 'react';

function LoginPage() {
    return (
        <div>
            <h1>LabeX</h1>
            <h2>LOGIN</h2>
            <p>Please enter your e-mail and password:</p>
            <input placeholder={'Email'}></input>
            <input placeholder={'Password'}></input>
            <button>Login</button>
           
        </div>
    );
}

export default LoginPage;