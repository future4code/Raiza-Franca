import React from 'react'
import { HeaderContainer, ButtonHeader } from '../Header/styled';
import { goToHome } from '../../routes/Coordinator';
import { useHistory } from "react-router-dom";


export default function Header() {

  const history = useHistory();
  return (
    <HeaderContainer>

      <ButtonHeader onClick={() => goToHome(history)}>Home</ButtonHeader>
    
    

    </HeaderContainer>
  );
}

