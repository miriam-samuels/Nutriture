import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home.js';
// import Error404 from './components/404Error.js';
import Signup from './components/signup.js';
import Login from './components/login.js';
import Patient from './components/patient';
import Doctor from './components/doctor.js';
import Nutritionist from './components/nutritionist.js';
import Pharmacy from './components/pharmacy.js';
import Company from './components/company';
import Profile from './components/userProfile.js';

import './App.css';
import './acct.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path = '/' exact component={Home} />
        <Route path = '/signup' exact component = {Signup} />
        <Route path = '/login' exact component = {Login} />
        <Route path = '/patient' exact component = {Patient} />
        <Route path = '/doctor' exact component = {Doctor} />
        <Route path = '/nutritionist' exact component = {Nutritionist} />
        <Route path = '/pharmacy' exact component = {Pharmacy} />
        <Route path = '/company' exact component = {Company} />
        <Route path = '/profile' exact component = {Profile} />

        {/* <Route path = "/" component = {Error404} /> */}
        <Route path ='/' render={()=><div>404 ERROR</div>}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
