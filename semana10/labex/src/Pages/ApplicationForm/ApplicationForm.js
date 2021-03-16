import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../axios/axiosConfig';
import useForm from '../../hooks/useForm'
import { ApplicationFormContainer, FormApplication, InputApplicationForm, TextAreaApplicationForm, SelectApplicationForm, ButtonApplicationForm } from '../ApplicationForm/styled'

function ApplicationFormPage() {


    const [trips, setTrips] = useState([])
    const [form, onChange, clear] = useForm({
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: "",
        trip: null
    });



    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setTrips(res.data.trips)
                
            })


    }, [baseUrl])

    const ApplytoTrip = (event) => {

        event.preventDefault();

      const body={
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
      }

        clear()


        axios.post(`${baseUrl}/${form.trip.id}/apply`, body)
        .then((res)=>[
            console.log('Aplicação realizada com sucesso')
        ]).catch((err)=>{
            console.log(err)
        })
    }
           

    return (
        <ApplicationFormContainer >
            <h2>Application Form</h2>
            <FormApplication onSubmit={ApplytoTrip}>
                <InputApplicationForm
                    name={'name'}
                    value={form['name']}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    placeholder={'Name'}>
                </InputApplicationForm>

                <InputApplicationForm
                    name={'age'}
                    type={'number'}
                    value={form['age']}
                    min={18}
                    onChange={onChange}
                    placeholder={'age'}>
                </InputApplicationForm>

                <TextAreaApplicationForm
                    name={'textApplication'}
                    value={form['textApplication']}
                    required
                    pattern={"^.{30,}"}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                    onChange={onChange}
                    placeholder={'application Text'}>
                </TextAreaApplicationForm>

                <InputApplicationForm
                    name={'profession'}
                    value={form['profession']}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}"}
                    title={"O nome deve ter no mínimo 10 caracteres"}
                    placeholder={'profession'}>
                </InputApplicationForm>

                <SelectApplicationForm
                    name={'country'}
                    value={form['country']}
                    onChange={onChange}
                    placeholder={'country'}
                    required>
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
                <SelectApplicationForm
                     labelId="select-viagens"
                     onChange={onChange}
                     value={form['trip']}
                     name={'trip'}>
                    {trips.map((trip) => {
            return <option value={trip}>{trip.name}</option>
          })}

                </SelectApplicationForm >
                <ButtonApplicationForm type={'submit'}>Aplicar</ButtonApplicationForm>
            </FormApplication>
        </ApplicationFormContainer>
    );
}

export default ApplicationFormPage;