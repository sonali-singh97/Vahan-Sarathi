import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Layout from './components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'leaflet/dist/leaflet.css';
import Sidebar from "./components/Sidebar.js"

import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';

import 'mapbox-gl/dist/mapbox-gl.css';
import DataContext from './context/Data';

import ThemeContext from './context/darkTheme';



function App() {
  const [data, setData] = useState(null);


  const [theme, setTheme] = useState(false)
  const { isAuthenticated } = useAuth0();
  return (
   
    <ThemeContext.Provider value={{theme, setTheme}}>
    <DataContext.Provider value={{data, setData}}>
    {isAuthenticated ? ( <div className="page sidebar-open">
      <Container fluid >
         <Header />
        <div className="wrapper">
          <Sidebar />
         <Layout />
        </div>
      </Container>
      </div>   ) : (
        <Login />
      )}
      </DataContext.Provider>
      </ThemeContext.Provider>)




}

export default App;
