import React , {useState} from 'react';
import { Row, Col, Card } from "react-bootstrap";
import Map from "./Map";
import CurrentInfo from "./CurrentInfo";
// import Header from "./Header"

const Layout = () => {
    const [mapCenter, setMapCenter] = useState({lat: 28.436030 ,  lng: 77.010180})
    const [mapZoom, setMapZoom] = useState(15)

    return (
        <div className="page-body">
            <Row>
                <Col lg={8}>
                    <Card>
                        <Card.Body>
                            <Map center={mapCenter} zoom={mapZoom} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <CurrentInfo />
                </Col>
            </Row>
        </div>
    )
}

export default Layout;