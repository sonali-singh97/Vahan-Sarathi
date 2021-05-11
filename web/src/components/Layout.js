import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Map from './Map';
import VelocityTime from './Charts/VelocityTime/VelocityTime';
import TemperatureTime from './Charts/TemperatureTime/TemperatureTime';
import HumidityTime from './Charts/HumidityTime/HumidityTime';
import MaleFemaleRatio from './Charts/MaleFemaleRatio/MaleFemaleRatio';
import MaskedUnmasked from './Charts/MaskedUnmasked/MaskedUnmasked';

// import Header from "./Header"

const Layout = () => {
  return (
    <div className="page-body">
      <Row>
        {/* Adding these charts here just for debugging purpose */}
        <VelocityTime />
        <TemperatureTime />
        <HumidityTime />
        <MaleFemaleRatio />
        <MaskedUnmasked />
        <Col lg={8}>
          <Card>
            <Map />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
