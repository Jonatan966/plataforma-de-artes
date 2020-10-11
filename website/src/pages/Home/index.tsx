import React from 'react';
import ContentContainer from '../../components/ContentContainer';
import ImageItem from '../../components/ImageItem';
import Model3D from '../../components/Model3D';
import NavBar from '../../components/NavBar';
import SearchBox from '../../components/SearchBox';

import { Container, ImageContainer, ResultsContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar/>
      <ContentContainer>
        <SearchBox/>
        <ResultsContainer>
          <Model3D/>
          <ImageContainer>
            <ImageItem/>
            <ImageItem/>
            <ImageItem/>
            <ImageItem/>
            <ImageItem/>
            <ImageItem/>
          </ImageContainer>
        </ResultsContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;
