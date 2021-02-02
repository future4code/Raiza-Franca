import { useState } from 'react'

export function useCreateTrip() {
    const [inputuseCreateTrip, setInputuseCreateTrip] = useState("");

    
    const onChangeuseCreateTrip = (event) => {
        setInputuseCreateTrip(event.target.value);

            };
    return [inputuseCreateTrip, onChangeuseCreateTrip]
}