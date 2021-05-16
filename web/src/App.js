import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Layout from './components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'leaflet/dist/leaflet.css';
import Sidebar from "./components/Sidebar.js"
import { useAuth0 } from '@auth0/auth0-react';
import 'mapbox-gl/dist/mapbox-gl.css';
import DataContext from './context/Data';
import ThemeContext from './context/darkTheme';
import StreamContext from './context/Stream';



function App() {
  let [ res , setRes] = useState([[35.77, 67.89]]);
  let [streamObj, setStreamObj] = useState()

  const [theme, setTheme] = useState(false)
  const { isAuthenticated } = useAuth0();
  return (
   <StreamContext.Provider value={{streamObj, setStreamObj}} >
    <ThemeContext.Provider value={{theme, setTheme}}>
    <DataContext.Provider value={{res, setRes}}>
     <div className="page sidebar-open">
      <Container fluid >
         <Header />
        <div className="wrapper">
          <Sidebar />
         <Layout />
        </div>
      </Container>
      </div>   
      </DataContext.Provider>
      </ThemeContext.Provider>
      </StreamContext.Provider>
      )




}

export default App;
