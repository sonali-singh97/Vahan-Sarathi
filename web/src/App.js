import React, { useState } from 'react';
import { Container ,Spinner } from 'react-bootstrap';
import Header from './components/Header';
import Layout from './components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'leaflet/dist/leaflet.css';

import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';

import 'mapbox-gl/dist/mapbox-gl.css';
import DataContext from './context/Data';
import HistoricData from './components/HistoricData';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const ThemeContext = React.createContext('light');

function App() {
  const [data, setData] = useState(null);

  const { isAuthenticated ,isLoading } = useAuth0();
  
  return (
    <DataContext.Provider value={{ data, setData }}>
      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          style={{ position: 'absolute', left: '50%', top: '50%' }}
        >
          <span className="sr-only"></span>
        </Spinner>
      ) : (
        <React.Fragment>
          <Switch>
            <Route exact path="/historic_data">
              <HistoricData />
            </Route>
            <Route exact path="/">
              <Container fluid>
                <Header logoutsource="dashboard" loginsource="dashboard" />
                <div className="wrapper">
                  <Layout />
                </div>
              </Container>
            </Route>
          </Switch>
        </React.Fragment>
      )}
    </DataContext.Provider>
  );
}

export default App;
