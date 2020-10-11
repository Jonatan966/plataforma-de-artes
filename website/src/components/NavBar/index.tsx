import React from 'react';

import defaultUserIcon from '../../images/default-user-image.png';
import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <h3>ASSINATURA PREMIUM</h3>
      <img src={defaultUserIcon} alt="Imagem de Usuário"/>
    </Container>
  );
};

export default NavBar;
