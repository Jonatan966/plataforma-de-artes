import React from 'react';

import lupaIcon from '../../images/lupa.svg';
import { Container } from './styles';

const SearchBox: React.FC = () => {
  return (
    <Container htmlFor="txbPesquisa">
      <img src={lupaIcon} alt="Lupa"/>
      <input 
        type="text" 
        placeholder="Digite uma palavra-chave. . ."
        id="txbPesquisa"
      />
    </Container>
  );
};

export default SearchBox;
