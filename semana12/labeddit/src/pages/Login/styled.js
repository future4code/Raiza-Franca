import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:50px;
    flex-wrap:wrap;
`;

export const Input = styled.input`
    padding: 10px;
    width: 350px;
    height: 40px;
    border: none;
    display:flex;
    background: #ecf0f1;
    border-radius: 3px;
    margin: 5px;
    text-align:center;
`;

export const Button = styled.button`
    padding: 10px;
    width: 360px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? "palevioletred" : "#9b59b6"};;
    color: #fff;
    margin: 10px;
    font-weight: bold;
`;

export const ButtonSingUp = styled.button`
    padding: 10px;
    width: 360px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background:white;
    outline:none;
    color: ${props => props.primary ? "palevioletred" : "#9b59b6"};
    margin: 10px;
    font-weight: bold;
`;

export const Title = styled.p`
    font-weight: bold;
    color: #9b59b6;
    font-size: 22px;
    font-style: italic;
`