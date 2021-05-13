import React , {useState} from 'react';
import { Row, Col, Card } from "react-bootstrap";
import Map from "./Map"
import VelocityTime from './Charts/VelocityTime/VelocityTime'
import HumidityTime from './Charts/HumidityTime/HumidityTime';
import TemperatureTime from './Charts/TemperatureTime/TemperatureTime';
import MaleFemaleRatio from './Charts/MaleFemaleRatio/MaleFemaleRatio';
import MaskedUnmasked from './Charts/MaskedUnmasked/MaskedUnmasked';
import AccelerationTime from './Charts/AccelerationTime/AccelerationTime';
import Age from './Charts/Age/Age';
import PressureTime from './Charts/PressureTime/PressureTime';
// import Header from "./Header"

const Layout = () => {
    const [mapCenter, setMapCenter] = useState({lat: 28.436030 ,  lng: 77.010180})
    const [mapZoom, setMapZoom] = useState(13)

    return (
        <div className="page-body">
            <Row>
                <Col lg={8}>
                    <Card>
                        <Card.Body>
                            <Map center={mapCenter} zoom={mapZoom}  tooltip="Location name"/>
                        </Card.Body>
                    </Card>
                </Col>

          <Col lg={4}>
            <Card>
              <Card.Body>Route</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <VelocityTime />
          <AccelerationTime />
          <TemperatureTime />
          <HumidityTime />
          <PressureTime />
          <MaleFemaleRatio />
          <MaskedUnmasked />
          <Age />
        </Row>
      </div>
    );
}

export default Layout;
