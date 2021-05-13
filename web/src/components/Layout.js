import React, { useState } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Map from './Map';
import CurrentInfo from "./CurrentInfo";
import VelocityTime from './Charts/VelocityTime/VelocityTime';
import HumidityTime from './Charts/HumidityTime/HumidityTime';
import TemperatureTime from './Charts/TemperatureTime/TemperatureTime';
import MaleFemaleRatio from './Charts/MaleFemaleRatio/MaleFemaleRatio';
import MaskedUnmasked from './Charts/MaskedUnmasked/MaskedUnmasked';
import AccelerationTime from './Charts/AccelerationTime/AccelerationTime';
import Age from './Charts/Age/Age';
import PressureTime from './Charts/PressureTime/PressureTime';
import OverallPersonCount from './Charts/OverallPersonCount/OverallPersonCount';
import CountData from './CountData/CountData';
// import Header from "./Header"

const Layout = () => {
    const [mapCenter, setMapCenter] = useState({lat: 28.436030 ,  lng: 77.010180})
    const [mapZoom, setMapZoom] = useState(20)

  return (
    <div className="page-body">
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Body>
              <Map center={mapCenter} zoom={mapZoom} tooltip="Location name" />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
         <CurrentInfo />
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <OverallPersonCount />
        </Col>
        <Col lg={7}>
          <Row>
            <MaleFemaleRatio />
            <MaskedUnmasked />
            <Age />
          </Row>
          <Row>
            <Col>
              <CountData name="Male" percentage={75} />
            </Col>
            <Col>
              <CountData name="Female" percentage={30} />
            </Col>
            <Col>
              <CountData name="With Mask" percentage={25} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <VelocityTime />
        <AccelerationTime />
        <TemperatureTime/>
        <HumidityTime />
        <PressureTime />
      </Row>
    </div>
  );
};

export default Layout;
