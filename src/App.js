import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/home.js';
import Contact from './home/contact.js'
import Error404 from './error404/404Error.js';
import Signup from './auth/signup.js';
import Login from './auth/login.js';
import Patient from './auth/patient';
import Doctor from './auth/doctor.js';
import Nutritionist from './auth/nutritionist.js';
import Pharmacy from './auth/pharmacy.js';
import Company from './auth/company';
import PatientProfile from './profile/patientProfile.js';
import DoctorProfile from './profile/doctorProfile.js';
import CompanyProfile from './profile/companyProfile.js';

import './App.css';
import './acct.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/login' exact component={Login} />
          <Route path='/patient' exact component={Patient} />
          <Route path='/doctor' exact component={Doctor} />
          <Route path='/nutritionist' exact component={Nutritionist} />
          <Route path='/pharmacy' exact component={Pharmacy} />
          <Route path='/company' exact component={Company} />
          <Route path='/profile/patient' exact component={PatientProfile} />
          <Route path='/profile/doctor' exact component={DoctorProfile} />
          <Route path='/profile/company' exact component={CompanyProfile} />

          <Route path="/" component={Error404} />
          {/* <Route path ='/' render={()=><div>404 ERROR</div>}/> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
