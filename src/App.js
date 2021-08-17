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
          <Route path='/signups' exact component={Signup} />
          <Route path='/signuppatient' exact component={Patient} />
          <Route path='/signupdoctor' exact component={Doctor} />
          <Route path='/signupnutritionist' exact component={Nutritionist} />
          <Route path='/signuppharmacy' exact component={Pharmacy} />
          <Route path='/signupcompany' exact component={Company} />
          <Route path='/privacy_policy' exact component={Privacy_Policy} />
          <Route path='/terms' exact component={Terms} />

          <Route path="/" component={Error404} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
