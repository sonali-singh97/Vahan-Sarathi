import React from "react";
import { Row, Col,InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-feather";
const  Header = () => {
return(
   <div className="header">
   <Row>
   <Col>
   <h4>Dashboard</h4>
   </Col>
   
   <Col>
   <InputGroup >
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Search Buses"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  
   </Col>

   <Col>
   Login
   </Col>
   </Row>
   </div> 
)
}

export default Header;