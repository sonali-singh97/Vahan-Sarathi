import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import Map from "./Map"
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
                        <Card.Body>
                            Route
           </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Layout;