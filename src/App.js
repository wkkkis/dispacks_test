import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';

import Companies from './components/Companies';
import StreetContainer from './components/Streets/StreetContainer';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'
               component={Companies}/>
        <Route exact path='/:streetId'
               component={StreetContainer}/>
      </Switch>
    </div>
  );
}

export default App
