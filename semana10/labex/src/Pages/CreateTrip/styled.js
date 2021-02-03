import styled from 'styled-components';

export const CreateTripContainer =styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const InputCreateTrip = styled.input`

width:350px;
height:35px;
margin:10px;
`
export const SelectCreateTrip = styled.select`

width:350px;
height:35px;
margin:10px;
`
export const TextAreaCreateTrip = styled.textarea`

width:350px;
height:60px;
margin:10px;
`
export const ButtonCreateTrip = styled.button`
width:350px;
height:40px;
margin:10px;
border:1 px solid black;
background-color:black;
color:white;

:hover{
    background-color:white;
color:black; 
}
`