import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-pro-sidebar/dist/css/styles.css";
import 'mapbox-gl/dist/mapbox-gl.css';

import Login from './components/Login';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";



const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID;

console.log(process.env)

ReactDOM.render(
  <Router>
  <Auth0Provider domain={domain} clientId={clientid} redirectUri={window.location.origin}>
    <App/>
  </Auth0Provider>
  </Router>,
  document.getElementById('root')
);
