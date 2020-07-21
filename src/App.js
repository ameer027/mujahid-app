import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './login';
import SignUp from './signup';
import SignUp3 from './signup3'
import PaymentMethod1 from './paymentmethod1'
import EditProfile from './editprofile'

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>W</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li>
              <Link className="nav-link" to={"/sign-up3"}>Sign up3</Link>
              </li>
              <li>
              <Link className="nav-link" to={"/paymentmethod1"}>Payment Method</Link>
              </li>
              <li>
              <Link className="nav-link" to={"/editprofile"}>Edit Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
      
      <Route exact path='/' component={Login} />
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-up3" component={SignUp3} />
      <Route path="/paymentmethod1" component={PaymentMethod1} />
      <Route path="/editprofile" component={EditProfile} />
      </Switch>
    </div></Router>
  );
}

export default App;