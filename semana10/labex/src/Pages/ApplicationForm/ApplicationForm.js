import React from 'react'
import {useInputApplicationForm} from '../../hooks/useInputApplicationForm'

function ApplicationFormPage() {
    const [nameApplicationForm, onChangenameApplicationForm] = useInputApplicationForm();
    const [ageApplicationForm, onChangeAgeApplicationForm] = useInputApplicationForm();
    const [textApplicationForm, onChangeTextApplicationForm] = useInputApplicationForm();
    const [countryApplicationForm, onChangeCountryApplicationForm] = useInputApplicationForm();

    return (
        <div>
            <input 
            value={nameApplicationForm}
            onChange={onChangenameApplicationForm}
            placeholder={'Name'}>
            </input>

            <input 
             value={ageApplicationForm}
             onChange={onChangeAgeApplicationForm}
            placeholder={'age'}>
            </input>

            <textarea 
             value={textApplicationForm}
             onChange={onChangeTextApplicationForm}
            placeholder={'applicationText'}>
            </textarea>

            <input 
             value={countryApplicationForm}
             onChange={onChangeCountryApplicationForm}
            placeholder={'country'}>
            </input>
        </div>
    );
}

export default ApplicationFormPage;