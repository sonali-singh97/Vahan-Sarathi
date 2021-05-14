import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Layout from './components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'leaflet/dist/leaflet.css';

import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';

import 'mapbox-gl/dist/mapbox-gl.css';
import DataContext from './context/Data';

const ThemeContext = React.createContext('light');



function App() {
  const [data, setData] = useState(null);

  const { isAuthenticated } = useAuth0();

  return (
    <DataContext.Provider value={{ data, setData }}>
      {isAuthenticated ? (
        <Container fluid>
          <Header />
          <div className="wrapper">
            <Layout />
          </div>
        </Container>
      ) : (
        <Login />
      )}
    </DataContext.Provider>
  );
}

export default App;
