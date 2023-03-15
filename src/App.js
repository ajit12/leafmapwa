//import 'mdbreact/dist/css/mdb.css';
//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import CitySelector from './leafmapCode/CitySelector';


const App = () => {
  return (
    <Router>
      <div>
        <CitySelector />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;

