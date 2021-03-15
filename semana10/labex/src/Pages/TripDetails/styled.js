import styled from 'styled-components';

export const DetailsContainer = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
export const Details = styled.div`
margin-top:50px;
width:300px;
height:300px;
border:1px solid black;
border-radius:20px;
text-align:left;

`
export const Title = styled.h2`
display:flex;
font-style:italic;
justify-content:center;
text-align:center;

`
export const TitleInfo = styled.h3`
display:flex;
font-style:italic;
justify-content:center;
text-align:center;

`
export const ButtonDetails = styled.button`
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
