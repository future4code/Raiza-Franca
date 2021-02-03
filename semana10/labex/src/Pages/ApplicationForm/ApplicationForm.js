import React, { useState } from 'react';
import axios from 'axios';
import { ApplyUrl } from '../../axios/axiosConfig'
import { ApplicationFormContainer, InputApplicationForm, TextAreaApplicationForm, ButtonApplicationForm } from '../ApplicationForm/styled'

function ApplicationFormPage() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [textApplication, setText] = useState('');
    const [profession, setProfession] = useState('');
    const [country, setCountry] = useState('')


    const onChangeName = (event) => {
        setName(event.target.value);
    };
    const onChangeAge = (event) => {
        setAge(event.target.value);
    };
    const onChangeText = (event) => {
        setText(event.target.value);
    };
    const onChangeProfession = (event) => {
        setProfession(event.target.value);
    };
    const onChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    const ApplytoTrip = () => {
        const body = {
            name: name,
            age: age,
            applicationText: textApplication,
            profession: profession,
            country: country
        }
        axios.post(ApplyUrl, body)
    }

    return (
        <ApplicationFormContainer>
            <h2>Application Form</h2>
            <InputApplicationForm
                value={name}
                onChange={onChangeName}
                placeholder={'Name'}>
            </InputApplicationForm>

            <InputApplicationForm
                type={'number'}
                value={age}
                onChange={onChangeAge}
                placeholder={'age'}>
            </InputApplicationForm>

            <TextAreaApplicationForm
                value={textApplication}
                onChange={onChangeText}
                placeholder={'application Text'}>
            </TextAreaApplicationForm>

            <TextAreaApplicationForm
                value={profession}
                onChange={onChangeProfession}
                placeholder={'profession'}>
            </TextAreaApplicationForm>

            <InputApplicationForm
                value={country}
                onChange={onChangeCountry}
                placeholder={'country'}>
            </InputApplicationForm>
            <ButtonApplicationForm>Aplicar</ButtonApplicationForm>
        </ApplicationFormContainer>
    );
}

export default ApplicationFormPage;