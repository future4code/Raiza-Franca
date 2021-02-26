import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';




export const StyledCard = styled.div`

width:100%;
display:flex;
flex-direction:column;
text-align:center;
display:flex;
justify-content:center;
`
export const Button = styled.button`
    padding: 10px;
    width: 360px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? "palevioletred" : "#9b59b6" };;
    color: #fff;
    margin: 10px;
    font-weight: bold;
    margin-bottom:50px;
`; 