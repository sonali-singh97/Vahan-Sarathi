import React, { useEffect, useState } from 'react';
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
import { Search } from 'react-feather';
import { Button } from 'react-bootstrap';
import axios from 'axios';
function HistoricData() {
  const { isAuthenticated } = useAuth0();

  const [busidvalue, setbusidvalue] = useState(1);
  const [routeid, setrouteid] = useState(1);

  const [datasend, setdatasend] = useState(null);

  const handleSelectbusid = (e) => {
    setbusidvalue(parseInt(e));
  };

  const handleSelectrouteid = (e) => {
    setrouteid(parseInt(e));
  };

  console.log('busidvalue : ' + busidvalue);
  console.log('routeid : ' + routeid);

  useEffect(() => {
    fetch(`http://pravega-test.centralindia.cloudapp.azure.com:10080/data/1/1`)
      .then((response) => response.json())
      .then((json) => {
        const data = json.message;
        setdatasend(data);
      });
  }, []);

  const getdata = () => {
    fetch(
      `http://pravega-test.centralindia.cloudapp.azure.com:10080/data/${routeid}/${busidvalue}`
    )
      .then((response) => response.json())
      .then((json) => {
        const data = json.message;
        setdatasend(data);
      });
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
              <h6>{`Bus id ${busidvalue}`}</h6>
              <DropdownButton
                style={{ margin: '1rem' }}
                id="dropdown-basic-button"
                title="Select Bus ID"
                onSelect={handleSelectbusid}
              >
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
              </DropdownButton>
              <h6>{`Route id ${routeid}`}</h6>
              <DropdownButton
                style={{ margin: '1rem' }}
                id="dropdown-basic-button"
                title="Select Route"
                onSelect={handleSelectrouteid}
              >
                <Dropdown.Item eventKey="1">Route ID 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Route ID 2</Dropdown.Item>
              </DropdownButton>
              <Button style={{ marginLeft: '2rem' }} onClick={getdata}>
                Go
              </Button>
            </div>
            {datasend ? (
              <React.Fragment>
                <div className="flexBox1">
                  <TemperatureBarChart data={datasend} />
                  <PressureBarChart data={datasend} />
                  <HumidityBarChart data={datasend} />
                </div>
                <div className="flexBox1">
                  <AgeGroupBarChart data={datasend} />
                  <MaleFemaleAreaChatr data={datasend} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MixedChart data={datasend} />
                </div>
              </React.Fragment>
            ) : null}
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default HistoricData;
