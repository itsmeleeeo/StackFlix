import './App.css';
import React from 'react'
import Header from './Components/Header/Header'
import mainPage from './Components/FrontSection/FrontSec'
import LoginPage from './Components/Login/login'
import SignUpPage from './Components/SignUp/SignUp'
import Footer from './Components/Footer/Footer'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={mainPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
        </Switch>
        <Footer text="&#169;All Rights Reserved - Mozart Development Corporation."/>
      </Router>
    </div>
  );
}

export default App;
