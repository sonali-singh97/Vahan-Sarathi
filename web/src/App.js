import React, {useState} from "react"
import {Container} from "react-bootstrap"
import Header from "./components/Header"
import Layout from "./components/Layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import "leaflet/dist/leaflet.css"

import 'mapbox-gl/dist/mapbox-gl.css';
import DataContext from './context/Data';

const ThemeContext = React.createContext('light');

function App() {

  const [data, setData] = useState(null)

  return (
    <DataContext.Provider value={{data, setData}}>
      <Container fluid>
         <Header />
        <div className="wrapper">
         <Layout />
        </div>
      </Container>
      </DataContext.Provider>

  );
}

export default App;
