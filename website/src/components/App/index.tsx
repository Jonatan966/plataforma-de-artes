import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </BrowserRouter>
  );
};

export default App;
