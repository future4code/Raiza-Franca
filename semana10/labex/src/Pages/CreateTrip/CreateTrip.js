import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { baseUrl } from '../../axios/axiosConfig';
import { CreateTripContainer, InputCreateTrip, SelectCreateTrip, TextAreaCreateTrip, ButtonCreateTrip } from '../CreateTrip/styled'

export default function CreateTripPage() {

    const [nameCreateTrip, setNameCreateTrip] = useState('');
    const [planetCreateTrip, setPlanetCreateTrip] = useState('selecione');
    const [dateCreateTrip, setDateCreateTrip] = useState('');
    const [descriptionCreateTrip, setDescriptionCreateTrip] = useState('');
    const [durationInDaysCreateTrip, setDurationInDaysCreateTrip] = useState(0);
    




    const onChangeName = (event) => {
        setNameCreateTrip(event.target.value);
    };

    const onChangePlanet = (event) => {
        setPlanetCreateTrip(event.target.value);
    };

    const onChangeDate = (event) => {
        setDateCreateTrip(event.target.value);
    };

    const onChangeDescription = (event) => {
        setDescriptionCreateTrip(event.target.value);
    };

    const onChangeDurationInDays = (event) => {
        setDurationInDaysCreateTrip(event.target.value);
    };




    const CreateTrip = () => {
        const body = {
            name: nameCreateTrip,
            planet:planetCreateTrip ,
            date: dateCreateTrip,
            description: descriptionCreateTrip,
            durationInDays: durationInDaysCreateTrip

        }
        
        axios.post(baseUrl,body, {
            headers: {
              auth: localStorage.getItem("token")
            }})
            .then((res) => {
                
                console.log(res.data.trip)
                alert('viagem criada com sucesso')

            })
            .catch((err) => {
                console.log(err)
            })
    }

   
    return (
        <CreateTripContainer>

            <h2>Create Trip</h2>

            <InputCreateTrip

                value={nameCreateTrip}
                onChange={onChangeName}
                placeholder={'Name Of Trip'}>
            </InputCreateTrip>

            <SelectCreateTrip
                value={planetCreateTrip}
                onChange={onChangePlanet}>
                <option value={'selecione'}>Selecione</option>
                <option value={'terra'}>Terra</option>
                <option value={'saturno'}>Saturno</option>
                <option value={'mercurio'}>Mercúrio</option>
                <option value={'marte'}>Marte</option>
                <option value={'plutao'}>Plutão</option>
                <option value={'venus'}>Vênus</option>
                <option value={'urano'}>Urano</option>
                <option value={'neturno'}>Neturno</option>
                <option value={'jupiter'}>Jupiter</option>
                <option value={'urano'}>Urano</option>



            </SelectCreateTrip>

            <InputCreateTrip
                value={dateCreateTrip}
                onChange={onChangeDate}
                type={'date'}
                placeholder={'Date'}>
            </InputCreateTrip>

            <TextAreaCreateTrip
                value={descriptionCreateTrip}
                onChange={onChangeDescription}
                placeholder={'Description'}>
            </TextAreaCreateTrip>

            <InputCreateTrip
                type={'number'}
                value={durationInDaysCreateTrip}
                onChange={onChangeDurationInDays}
                placeholder={'Duration In Days'}>
            </InputCreateTrip>
            <ButtonCreateTrip onClick={CreateTrip}>Criar</ButtonCreateTrip>

        </CreateTripContainer>
    );
}

