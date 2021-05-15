import React, { useState } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Map from './Map';
import CurrentInfo from './CurrentInfo';
import VelocityTime from './Charts/VelocityTime/VelocityTime';
import HumidityTime from './Charts/HumidityTime/HumidityTime';
import TemperatureTime from './Charts/TemperatureTime/TemperatureTime';
import MaleFemaleRatio from './Charts/MaleFemaleRatio/MaleFemaleRatio';
import MaskedUnmasked from './Charts/MaskedUnmasked/MaskedUnmasked';
import AccelerationTime from './Charts/AccelerationTime/AccelerationTime';
import Age from './Charts/Age/Age';
import PressureTime from './Charts/PressureTime/PressureTime';
import CountData from './CountData/CountData';
import total_icon from './../assets/icons/activity.svg';
import maleicon from './../assets/icons/male.svg';
import mask_icon from './../assets/icons/masked.svg';
import female_icon from './../assets/icons/svg.svg';
import AgeGroups from './Charts/AgeGroups/AgeGroups';

import { useAuth0 } from '@auth0/auth0-react';
import BlurOverlay from './BlurOverlay/BlurOverlay';

// import Header from "./Header"

const Layout = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 28.43603, lng: 77.01018 });
  const [mapZoom, setMapZoom] = useState(20);

  const { isAuthenticated, isLoading } = useAuth0();

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
      <div className="main_div">
        {!isAuthenticated ? <BlurOverlay /> :null}
        <Row style={{ height: '500px' }}>
          <div style={{ height: '500px', width: '40%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'coloumn',
                justifyContent: 'center',
                alignItems: 'center',
                height: '500px',
                textAlign: 'left',
              }}
            >
              <div>
                <CountData
                  logo={total_icon}
                  name="Total"
                  percentage={25}
                  count
                />
                <CountData logo={maleicon} name="Male" percentage={75} />
              </div>
              <div>
                <CountData logo={female_icon} name="Female" percentage={30} />
                <CountData logo={mask_icon} name="With Mask" percentage={25} />
              </div>
            </div>
          </div>
          <div style={{ height: '500px', width: '55%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'coloumn',
                justifyContent: 'center',
                alignItems: 'center',
                height: '500px',
              }}
            >
              <VelocityTime />
            </div>
          </div>
        </Row>
        <Row style={{ height: '300px' }}>
          <div style={{ height: '100%', width: '75%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <TemperatureTime />
              <HumidityTime />
              <PressureTime />
            </div>
          </div>
          <div style={{ height: '100%', width: '25%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {/* <Age /> */}
              <AgeGroups />
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Layout;
