import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Container,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import Header from './Header';
import './../assets/scss/components/Historicdata.scss';
import TemperatureBarChart from './Historical Data Charts/TemperatureBarChart/TemperatureBarChart';
import AgeGroupBarChart from './Historical Data Charts/AgeGroupsBarChart/AgeGroupBarChart';
import HumidityBarChart from './Historical Data Charts/HumidityBarChart/HumidityBarChart';
import MaleFemaleAreaChatr from './Historical Data Charts/MaleFemaleAreaChart/MaleFemaleAreaChart';
import PressureBarChart from './Historical Data Charts/PressureBarChart/PressureBarChart';
import MixedChart from './Historical Data Charts/MixedCharts/MixedCharts';
import BlurOverlay from './../components/BlurOverlay/BlurOverlay';
import { useAuth0 } from '@auth0/auth0-react';
function HistoricData() {
  const { isAuthenticated } = useAuth0();

  const [busidvalue, setbusidvalue] = useState(null);
  const [routeid, setrouteid] = useState(null);

  const handleSelectbusid = (e) => {
    setbusidvalue(e);
  };

  const handleSelectrouteid = (e) => {
    setrouteid(e);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isAuthenticated ? null : <BlurOverlay />}
      <Container fluid>
        <Header loginsource="historical_data" logoutsource="historical_data" />
        <div style={{ marginTop: '6rem' }}>
          <Container className="sub" style={{ width: '100%', height: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DropdownButton
                  style={{ margin: '1rem' }}
                  id="dropdown-basic-button"
                  title="Select Bus ID"
                  onSelect={handleSelectbusid}
                >
                  <Dropdown.Item eventKey="Bus ID 1">Bus ID 1</Dropdown.Item>
                  <Dropdown.Item eventKey="Bus ID 2">Bus ID 2</Dropdown.Item>
                  <Dropdown.Item eventKey="Bus ID 3">Bus ID 3</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  style={{ margin: '1rem' }}
                  id="dropdown-basic-button"
                  title="Select Route"
                  onSelect={handleSelectrouteid}
                >
                  <Dropdown.Item eventKey="Route ID 1">
                    Route ID 1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Route ID 2">
                    Route ID 2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Route ID 3">
                    Route ID 3
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            <div className="flexBox1">
              <TemperatureBarChart />
              <PressureBarChart />
              <HumidityBarChart />
            </div>
            <div className="flexBox1">
              <AgeGroupBarChart />
              <MaleFemaleAreaChatr />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <MixedChart />
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default HistoricData;
