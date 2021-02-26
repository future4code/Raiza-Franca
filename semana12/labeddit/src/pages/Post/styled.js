import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:50px;
`;

export const Input = styled.input`
    padding: 10px;
    width: 350px;
    height: 40px;
    border: none;
    background: #ecf0f1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    border-radius: 3px;
    margin: 5px;
`;
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
    background: ${props => props.primary ? "palevioletred" : "#9b59b6" };
    color: #fff;
    margin: 10px;
    font-weight: bold;
    margin-bottom:24px;
`; 


