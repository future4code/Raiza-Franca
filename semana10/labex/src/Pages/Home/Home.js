import React from 'react';
import { goToLogin, goToApplicationForm } from '../../routes/Coordinator'
import { useHistory } from "react-router-dom";
import {ButtonsHome, Button} from '../Home/styled'

export default function Home() {

    const history = useHistory();
    return (
        <ButtonsHome>
            
            <Button onClick={() => goToLogin(history)}>Área do Administrador</Button>
           
            <Button onClick={() => goToApplicationForm(history)}>Candidatar-se para Trip</Button>

        </ButtonsHome>
    );
}

