import React from 'react'
import styled from 'styled-components'

export const ContainerHeader = styled.div`

width:300px;
height:50px;
display:flex;
justify-content:space-between;

`
export const Logo = styled.p`
display:flex;
font-weight:bolder;
font-style:italic;
margin:0 auto;
padding-right:90px;
align-items: center;
width:20px;
height:20px;
padding-bottom:10px;
`
export const Button = styled.button`

display:flex;
justify-content:flex-end;
align-items: center;
background-color:lightpink;
border:none;
outline-style: none;
width:20px;
height:20px;
cursor: pointer;
`
export const LogoImage = styled.img`
width:50px;
display:flex;
justify-content:center;
align-items: center;
`