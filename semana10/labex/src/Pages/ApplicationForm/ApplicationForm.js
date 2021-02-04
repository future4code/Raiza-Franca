import React,{useState} from 'react';
import axios from 'axios';
import { baseUrl } from '../../axios/axiosConfig';
import useForm from '../../hooks/useForm'
import { useParams } from "react-router-dom";
import { ApplicationFormContainer, InputApplicationForm, TextAreaApplicationForm, SelectApplicationForm, ButtonApplicationForm } from '../ApplicationForm/styled'

function ApplicationFormPage() {

    const params = useParams();
    const [trips, setTrips] = useState()
    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" });

    const getTrips = () => {
        axios.get(baseUrl)
            .then((res) => {
                setTrips(res.data.trips)
            }).catch((err) => {

            })
    }

    const ApplytoTrip = (event) => {

        event.preventDefault();
        clear()

        axios.post(`${baseUrl}${params.id}/apply`, form)
            .then((res) => {
                alert('Sua inscrição foi realizada com sucesso')
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <ApplicationFormContainer>
            <h2>Application Form</h2>
            <form onSubmit={ApplytoTrip}>
                <InputApplicationForm
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    placeholder={'Name'}>
                </InputApplicationForm>

                <InputApplicationForm
                    name='age'
                    type={'number'}
                    value={form.age}
                    min={18}
                    onChange={onChange}
                    placeholder={'age'}>
                </InputApplicationForm>

                <TextAreaApplicationForm
                    name='textApplication'
                    value={form.textApplication}
                    required
                    pattern={"^.{30,}"}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                    onChange={onChange}
                    placeholder={'application Text'}>
                </TextAreaApplicationForm>

                <InputApplicationForm
                    name='profession'
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}"}
                    title={"O nome deve ter no mínimo 10 caracteres"}
                    placeholder={'profession'}>
                </InputApplicationForm>

                <SelectApplicationForm
                    name='country'
                    value={form.country}
                    onChange={onChange}
                    placeholder={'country'}>
                    <option value={'selecione'}>Selecione</option>
                    <option value={'Brasil'}>Brasil</option>
                    <option value={'Argentina'}>Argentina</option>
                    <option value={'EUA'}>EUA</option>
                    <option value={'França'}>França</option>
                    <option value={'Alemanha'}>Alemanha</option>
                    <option value={'Grecia'}>Grécia</option>
                    <option value={'Amesterdam'}>Amesterdam</option>
                    <option value={'italia'}>Itália</option>
                    <option value={'Malta'}>Malta</option>
                    <option value={'China'}>China</option>
                </SelectApplicationForm >
                <SelectApplicationForm>
                    {trips.map((trip) => {
                        return (
                            <option>{trip.name}</option>
                        )
                    })}
                    <option value={'selecione'}>Selecione</option>
                    <option >Nome da viagem - planeta</option>
                </SelectApplicationForm >
                <ButtonApplicationForm>Aplicar</ButtonApplicationForm>
            </form>
        </ApplicationFormContainer>
    );
}

export default ApplicationFormPage;