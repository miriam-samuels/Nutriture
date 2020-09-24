import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/home.js';
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
import Privacy_Policy from './terms/privacypolicy'
import Terms from './terms/termsofservice'

import './App.css';
import './acct.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/signup/patient' exact component={Patient} />
          <Route path='/signup/doctor' exact component={Doctor} />
          <Route path='/signup/nutritionist' exact component={Nutritionist} />
          <Route path='/signup/pharmacy' exact component={Pharmacy} />
          <Route path='/signup/company' exact component={Company} />
          <Route path='/profile/patient' exact component={PatientProfile} />
          <Route path='/profile/doctor' exact component={DoctorProfile} />
          <Route path='/profile/company' exact component={CompanyProfile} />
          <Route path='/privacy_policy' exact component={Privacy_Policy} />
          <Route path='/terms' exact component={Terms} />

          <Route path="/" component={Error404} />
          {/* <Route path ='/' render={()=><div>404 ERROR</div>}/> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
