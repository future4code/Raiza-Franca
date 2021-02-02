import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { useCreateTrip } from '../../hooks/useCreateTrip'
import {goToListTrip} from '../../routes/Coordinator'
import { useHistory } from "react-router-dom"; 
import {urlCreateTrip} from '../../axios/axiosConfig'

export default function CreateTrip() {
    
    

    const [nameCreateTrip, onchangeNameCreateTrip] = useCreateTrip()
    const [planetCreateTrip, onchangePlanetCreateTrip] = useCreateTrip()
    const [dateCreateTrip, onchangeDateCreateTrip] = useCreateTrip()
    const [descriptionCreateTrip, onchangeDescriptionCreateTrip] = useCreateTrip()
    const [durationInDaysCreateTrip, onchangeDurationInDaysCreateTrip] = useCreateTrip()

    const history = useHistory();

    useEffect(() => {
        CreateTrip()
    }, [])

    const CreateTrip = () => {
        const body = {
            name: nameCreateTrip,
            planet: planetCreateTrip,
            date: dateCreateTrip,
            description: descriptionCreateTrip,
            durationInDays: durationInDaysCreateTrip
        }
        axios.post(urlCreateTrip, body)
            .then((res) => {
                
                console.log(res.data.trip)

            })
            .catch((err) => {

            })
    }

    return (
        <div>
            <h1>LabeX</h1>
            <h2>CreateTripPage</h2>

            <input
                name={nameCreateTrip}
                onChange={onchangeNameCreateTrip}
                placeholder={'name of trip'}>
            </input>

            <input
                name={planetCreateTrip}
                onChange={onchangePlanetCreateTrip}
                placeholder={'planet'}>
            </input>

            <input
                name={dateCreateTrip}
                onChange={onchangeDateCreateTrip}
                type={'date'}
                placeholder={'date'}>
            </input>

            <textarea
                name={descriptionCreateTrip}
                onChange={onchangeDescriptionCreateTrip}
                placeholder={'description'}>
            </textarea>

            <input
                name={durationInDaysCreateTrip}
                onChange={onchangeDurationInDaysCreateTrip}
                placeholder={'durationInDays'}>
            </input>
            <button onClick={() => goToListTrip(history)}>Criar</button>

        </div>
    );
}

