import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </BrowserRouter>
    </Container>
  );
};

export default App;
