import styled from 'styled-components'

export const LoginContainer = styled.div`
width:100%;
height:100%;
display:flex;
margin-top:50px;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

`
export const FormLogin =styled.form`

display:flex;
margin-top:50px;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`
export const InputLogin = styled.input`

width:350px;
height:35px;
margin:10px;
`
export const ButtonLogin = styled.button`
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