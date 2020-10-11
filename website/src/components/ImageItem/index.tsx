import React from 'react';

import testImg from '../../images/dalek.jpg';
import heartIcon from '../../images/heart.png';
import cancelIcon from '../../images/cancel.png';
import { Container } from './styles';

const ImageItem: React.FC = () => {
  return (
    <Container>
      <img src={testImg} alt="Teste"/>
      <label>
        <button><img src={heartIcon} alt="Curtir"/></button>
        <button><img src={cancelIcon} alt="Próximo"/></button>
      </label>
    </Container>
  );
};

export default ImageItem;
