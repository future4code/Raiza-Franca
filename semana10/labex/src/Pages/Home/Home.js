import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from '../../axios/axiosConfig';
import { goToLogin, goToApplicationForm } from '../../routes/Coordinator'
import { useHistory } from "react-router-dom";
import {ButtonsHome, Button} from '../Home/styled'

export default function Home() {

    const history = useHistory();
    
    const [trips, setTrips] = useState([])
    
    const getTrips = () => {
        axios.get(baseUrl)
            .then((res) => {
                setTrips(res.data.trips)
            }).catch((err) => {

            })
    }
    useEffect(() => {
        getTrips()
    }, [])


    
    return (
        <ButtonsHome>
            
            <Button onClick={() => goToLogin(history, trips.id)}>Área do Administrador</Button>
           
            <Button onClick={() => goToApplicationForm(history)}>Candidatar-se para Trip</Button>

        </ButtonsHome>
    );
}

