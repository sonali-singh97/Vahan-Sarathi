import {Container} from "react-bootstrap"
import Header from "./components/Header"
import Layout from "./components/Layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faLightbulb, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
//import "leaflet/dist/leaflet.css"

import 'mapbox-gl/dist/mapbox-gl.css';

library.add( faCheckSquare, faCoffee , faLightbulb, faQuestionCircle)

function App() {
  return (
      <Container fluid>
         <Header />
        <div className="wrapper">
         <Layout />
        </div>
      </Container>

  );
}

export default App;
