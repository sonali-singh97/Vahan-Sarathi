import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './index.scss'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';


ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);


