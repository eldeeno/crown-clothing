import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/hompage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact apth='/' component={HomePage} />
        <Route apth='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
