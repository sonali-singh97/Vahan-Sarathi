import React, { useState } from 'react';
import { Row, Col, Card } from "react-bootstrap";


const Info = () => {


    return (
        <div className="info">
            <Card className="route">

                <Card.Body>

                    <h4> Bus No: </h4>

                    <div className="route-stops">
                        <div>
                            <h5>Source :</h5>
                        </div>

                        <div>
                            <h5>Destination :</h5>
                        </div>
                    </div>

                </Card.Body>
            </Card>

            <Card className="current-stop">
                <Card.Body>
                    <h5>Current Stop: </h5>
                </Card.Body>
            </Card>

            <Card className="eta">
                <Card.Body>
                    <h5> Estimated Time of Arrival </h5>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Info;