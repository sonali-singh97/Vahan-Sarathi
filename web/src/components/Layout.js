import React, { useState,useEffect, useContext } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
// import Map from './Map';
//import Map from './Route';
import Maps from './HereMap';

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
import StreamContext from '../context/Stream';
import { useAuth0 } from '@auth0/auth0-react';
import BlurOverlay from './BlurOverlay/BlurOverlay';

// import Header from "./Header"

const Layout = () => {
  // const [mapCenter, setMapCenter] = useState({ lat: 28.43603, lng: 77.01018 });
  const [mapZoom, setMapZoom] = useState(30);
  const {streamObj, setStreamObj} = useContext(StreamContext)
  const { isAuthenticated, isLoading } = useAuth0();
  const [count, setCount] = useState(50);
  const [female, setFemale] = useState(20);
  const [male, setMale] = useState(30);
  const [ maskCount, setMaskCount] = useState(36);

  useEffect(()=>{
    if(streamObj!== undefined){
       let people = JSON.parse(streamObj)
      setCount(people.count)
      setMaskCount(people.countmask)
      setFemale(people.countfemale);
      setMale(people.countmale);
    }

  },[streamObj])

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
      <div className="main_div">
        {/* {!isAuthenticated ? <BlurOverlay /> :null} */}
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
                  percentage={count}
                  count
                />
                <CountData logo={maleicon} name="Male" percentage={male} count />
              </div>
              <div>
                <CountData logo={female_icon} name="Female" percentage={female} count />
                <CountData logo={mask_icon} name="With Mask" percentage={maskCount} count/>
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
