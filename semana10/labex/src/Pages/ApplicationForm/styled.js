import styled from 'styled-components';

export const ApplicationFormContainer =styled.div`

display:flex;
flex-direction:column;
margin-top:10px;
justify-content:center;
align-items:center;
`
export const InputApplicationForm = styled.input`

width:350px;
height:35px;
margin:10px;
`
export const TextAreaApplicationForm = styled.textarea`

width:350px;
height:60px;
margin:10px;
`
export const ButtonApplicationForm = styled.button`
width:360px;
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
export const SelectApplicationForm = styled.select`

width:350px;
height:35px;
margin:10px;
`