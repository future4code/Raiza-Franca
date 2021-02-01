import { useState } from 'react'

export function useInputApplicationForm() {
    const [inputApplicationForm, setInputApplicationForm] = useState("");

    
    const onChangeApplicationForm = (event) => {
        setInputApplicationForm(event.target.value);
    };
    return [inputApplicationForm, onChangeApplicationForm]
}