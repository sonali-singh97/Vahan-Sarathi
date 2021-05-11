import React from 'react';
import {Row, Col, Card} from "react-bootstrap";
import Map from "./Map"
// import Header from "./Header"

const Layout = () => {
return (
    <div className="page-body">
    <Row>
    <Col lg={8}>
    <Card>
    <Map />
    </Card>
    </Col>
    </Row>
    </div>
)
}

export default Layout;