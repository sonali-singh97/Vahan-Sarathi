import React, { useState } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
// import Map from './Map';
//import Map from './Route';
import Maps from './HereMap';

import CurrentInfo from './CurrentInfo';
//import VelocityTime from './Charts/VelocityTime/VelocityTime';
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
import TemperatureBarChart from './Historical Data Charts/TemperatureBarChart/TemperatureBarChart';
import PressureBarChart from './Historical Data Charts/PressureBarChart/PressureBarChart';
import HumidityBarChart from './Historical Data Charts/HumidityBarChart/HumidityBarChart';
import AgeGroupBarChart from './Historical Data Charts/AgeGroupsBarChart/AgeGroupBarChart';
import MaleFemaleAreaChart from './Historical Data Charts/MaleFemaleAreaChart/MaleFemaleAreaChart';
import MixedCharts from './../components/Historical Data Charts/MixedCharts/MixedCharts';

// import Header from "./Header"

const Layout = () => {
  // const [mapCenter, setMapCenter] = useState({ lat: 28.43603, lng: 77.01018 });
  const [mapZoom, setMapZoom] = useState(25);

  return (
    <div className="page-body">
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Body>
              <Maps  zoom={mapZoom} tooltip="Location name" />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <CurrentInfo />
        </Col>
      </Row>
      <Row style={{ height: '500px' }}>
        <Col style={{ height: '100%' }} lg={5}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'coloumn',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <CountData logo={total_icon} name="Total" percentage={25} count />
              <CountData logo={maleicon} name="Male" percentage={75} />
            </div>
            <div>
              <CountData logo={female_icon} name="Female" percentage={30} />
              <CountData logo={mask_icon} name="With Mask" percentage={25} />
            </div>
          </div>
        </Col>
        {/* <Col style={{ height: '100%' }} lg={7}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <VelocityTime />
          </div>
        </Col> */}
      </Row>
      <Row style={{ height: '400px' }}>
        <Col lg={9} style={{ height: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TemperatureTime />
            <HumidityTime />
            <PressureTime />
          </div>
        </Col>
        <Col lg={3} style={{ height: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Age /> */}
            <AgeGroups />
          </div>
        </Col>
        <TemperatureBarChart />
        <PressureBarChart />
        <HumidityBarChart />
        <AgeGroupBarChart />
        <MaleFemaleAreaChart />
        <MixedCharts />
      </Row>
    </div>
  );
};

export default Layout;
