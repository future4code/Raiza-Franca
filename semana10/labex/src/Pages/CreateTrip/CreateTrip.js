import React from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import { baseUrl } from '../../axios/axiosConfig';
import { CreateTripContainer, InputCreateTrip, SelectCreateTrip, TextAreaCreateTrip, ButtonCreateTrip } from '../CreateTrip/styled'

export default function CreateTripPage() {

    const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });




    const CreateTrip = (event) => {

        event.preventDefault();
        clear()
        axios.post(baseUrl, form, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => {

                alert('viagem criada com sucesso')

            })
            .catch((err) => {

            })
    }


    return (
        <CreateTripContainer>

            <h2>Create Trip</h2>
            <form onSubmit={CreateTrip}>

                <InputCreateTrip
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    placeholder={'Name Of Trip'}>
                </InputCreateTrip>

                <SelectCreateTrip
                    name='planet'
                    value={form.planet}
                    onChange={onChange}>
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
                    name='date'
                    value={form.date}
                    onChange={onChange}
                    type={'date'}
                    placeholder={'Date'}
                    max={new Date()}
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 caracteres"}
                    required>
                </InputCreateTrip>

                <TextAreaCreateTrip
                    name='description'
                    value={form.description}
                    onChange={onChange}
                    placeholder={'Description'}
                    pattern={"^.{30,}"}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                    required>
                </TextAreaCreateTrip>

                <InputCreateTrip
                    name='durationInDays'
                    type={'number'}
                    min={50}
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder={'Duration In Days'}
                    required>
                </InputCreateTrip>
                <ButtonCreateTrip>Criar</ButtonCreateTrip>
            </form>

        </CreateTripContainer>
    );
}

