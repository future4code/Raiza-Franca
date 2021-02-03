import styled from 'styled-components';

export const ListTripContainer = styled.div`

width:300px;
height:200px;
margin:0 auto;
padding:20px 0;
text-align:center;

`
export const Title = styled.h2`
display:flex;
font-style:italic;
justify-content:center;

`
export const NameListTrip = styled.button`
font-size:16px;
font-style:italic;
border:1px solid black;
padding:20px;
width:275px;
height:70px;
margin:10px;
border:1 px solid black;
background-color:black;
color:white;

:hover{
    background-color:white;
color:black;
}
`
export const ButtonListTrip = styled.button`
width:175px;
height:40px;
margin:10px;
background-color:white;
color:black;
border:1 px solid black;


:hover{
    background-color:black;
color:white;
}
`