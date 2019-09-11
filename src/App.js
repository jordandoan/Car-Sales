import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Cars from './components/Cars';
import Car from './components/Car';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Route exact path="/" component={Cars} />
      <Route exact path="/:id" component={Car} />
    </div>
  );
};

export default App;
