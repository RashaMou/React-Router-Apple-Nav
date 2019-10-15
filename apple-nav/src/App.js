import React, { useState } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import { Route } from 'react-router-dom';
import menu from './menuData';

function App() {
  const [nav] = useState(menu)
  console.log('nav', nav)
  return (
    <div>
      <Route 
        path='/'
        render= {props => <NavWrapper {...props} nav={nav}/>} /> 
    </div>
  );
}

export default App;
