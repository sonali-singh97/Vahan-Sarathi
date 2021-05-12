import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import Map from "./Map"
import VelocityTime from './Charts/VelocityTime/VelocityTime'
import HumidityTime from './Charts/HumidityTime/HumidityTime';
import TemperatureTime from './Charts/TemperatureTime/TemperatureTime';
import MaleFemaleRatio from './Charts/MaleFemaleRatio/MaleFemaleRatio';
import MaskedUnmasked from './Charts/MaleFemaleRatio/MaleFemaleRatio';
// import Header from "./Header"

const Layout = () => {
    return (
      <div className="page-body">
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Body>
                <Map />
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
          <TemperatureTime />
          <HumidityTime />
          <MaleFemaleRatio />
          <MaskedUnmasked />
        </Row>
      </div>
    );
}

export default Layout;
