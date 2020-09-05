import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home.js';
// import Error404 from './components/404Error.js';
import Signup from './components/signup.js'
import './App.css';
import './acct.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path = '/' exact component={Home} />
        {/* <Route path = "/" component = {Error404} /> */}
        <Route path ='/' render={()=><div>404 ERROR</div>}/>

        <Route path = '/signup' exact component = {Signup} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
