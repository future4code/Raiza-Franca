import React from 'react';

function CreateTripPage() {
    return (
        <div>
            <h1>LabeX</h1>
            <h2>CreateTripPage</h2>
            
            <input placeholder={'name of trip'}></input>
            <input placeholder={'planet'}></input>
            <input type={'date'} placeholder={'date'}></input>
            <textarea placeholder={'description'}></textarea>
            <input  placeholder={'durationInDays'}></input>
            <button>Login</button>
           
        </div>
    );
}

export default CreateTripPage;