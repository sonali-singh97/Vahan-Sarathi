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
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <CountData name="Male" percentage={75} />
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <CountData name="Female" percentage={30} />
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <CountData name="With Mask" percentage={25} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MaleFemaleRatio />
          </Col>
          <Col>
            <MaskedUnmasked />
          </Col>
          <Col>
            <Age />
          </Col>
        </Row>
      </Row>
      <Row>
        <VelocityTime />
        <AccelerationTime />
        <TemperatureTime />
        <HumidityTime />
        <PressureTime />
      </Row>
    </div>
  );
};

export default Layout;
