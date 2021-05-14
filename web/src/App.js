import React, {useState} from "react"
import {Container} from "react-bootstrap"
import Header from "./components/Header"
import Layout from "./components/Layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import "leaflet/dist/leaflet.css"

import 'mapbox-gl/dist/mapbox-gl.css';
import DataContext from './context/Data';

import ThemeContext from './context/darkTheme';

function App() {

  const [data, setData] = useState(null)
  const [theme, setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <DataContext.Provider value={{data, setData}}>
      <Container fluid >
         <Header />
        <div className="wrapper">
         <Layout />
        </div>
      </Container>
      </DataContext.Provider>
      </ThemeContext.Provider>

  );
}

export default App;
