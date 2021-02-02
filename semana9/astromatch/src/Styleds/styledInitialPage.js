import React from 'react'
import styled from 'styled-components'


export const Container = styled.div`
padding:20px;
width:300px;
height:500px;
border:1px solid black;
display:flex;
justify-content:center;
flex-wrap:wrap;
background-color:lightpink;

`
export const ContainerInformation = styled.div`

border:1px solid black;
width:250px;
height:350px;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
box-shadow: rgba(117, 117, 117, 0.77) 0px 2px 10px 0px;
position: relative;
border-radius: 5px;
overflow: hidden;
transition: all 0.5s ease 0s;
animation: 0.5s ease 0s 1 normal forwards running none;
-webkit-box-align: center;
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    

`
export const Image = styled.img`
width: 100%;
height:100%;
display: block;
position:relative;
z-index:1


`
export const Name = styled.p`

position: absolute;
font-size:26px;
color: black;
text-shadow: 0px 0px 5px black;
display: flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
text-align:end;
height: 30%;
-webkit-box-pack: end;
padding: 35px;
color:white;
z-index: 2;
margin-top:130px;

`

export const Bio = styled.p`

position: absolute;
color: black;
text-shadow: 0px 0px 5px black;
display: flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
text-align:end;
height: 30%;
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
-webkit-box-pack: end;
padding: 15px;
z-index: 2;
margin-top:250px;
color:white;

`
export const ContainerButton = styled.div`
padding:20px;
display:flex;
justify-content:space-between;



`
export const ButtonX = styled.button`

margin-right:10px;
background-color:white;
border:none;
outline-style: none;
border-radius: 50%;
border: 1px solid lightskyblue;
color: lightskyblue;
font-size: 50px;
position: relative;
width: 60px;
height: 60px;
cursor: pointer;


:hover{
box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
overflow: hidden;
transform: scale(0.7);
transition: all 0.2s ease 0s;

}


`
export const ButtonS2 = styled.button`
margin-left:10px;
border-radius: 50%;
width: 60px;
height: 60px;
background-color:white;
border:none;
outline-style: none;
border: 1px solid hotpink;
color: hotpink;
font-size: 50px;


position: relative;


:hover{
    box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
overflow: hidden;
transform: scale(0.7);
transition: all 0.2s ease 0s;
}
`
