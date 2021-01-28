/* eslint react/prop-types: 0 */
/* eslint no-unused-vars: 0 */

import React, { useContext, createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
// import SignIn from './components/SignIn';
import KeyManagement from './components/KeyManagement';

ReactDOM.render(
    <Router>
      <Switch>
        {/* <Route path="/login">
          <SignIn />
        </Route> */}
        <Route path="/">
          <KeyManagement />
        </Route>
      </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
