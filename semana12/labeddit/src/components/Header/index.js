import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled'
import Button from '@material-ui/core/Button';
import { goToLogin, goToPostsList } from '../../route/cordinator'
import { useHistory } from 'react-router-dom'




function Header({changeButton, setChangeButton}) {
    const token = localStorage.getItem("token");
    const history = useHistory()
    
   const logout =()=>{
       localStorage.removeItem('token')
   }
   const changeButtonAction=()=>{
       if(token){
           logout()
           setChangeButton('Login')
           goToLogin(history)
       } else{
        goToLogin(history) 
       }
   }
    return (

        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToPostsList(history)} color="inherit"> LabEddit </Button>

    <Button onClick={changeButtonAction} color="inherit">{changeButton}</Button>
            </StyledToolbar>
        </AppBar>

    );
}
export default Header