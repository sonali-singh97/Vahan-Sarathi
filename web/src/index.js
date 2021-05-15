import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout'
import { Container } from 'react-bootstrap';
import HistoricData from './components/HistoricData';
import Header from './components/Header'
import { useAuth0 } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID;


console.log(process.env);

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientid}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);
