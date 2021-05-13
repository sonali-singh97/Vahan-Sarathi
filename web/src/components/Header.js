import React from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Search } from 'react-feather';
const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col>
          <h4>Dashboard</h4>
        </Col>

        <Col>
          <div className="input-div">
            <label>
              <Search />
            </label>
            <input type="text" placeholder="Search Buses..." />
          </div>
        </Col>

        <Col>Login</Col>
      </Row>
    </div>
  );
};

export default Header;
