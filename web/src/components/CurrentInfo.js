import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Card } from "react-bootstrap";
import StreamContext from "../context/Stream";
import stops from "../components/stops";

const Info = () => {
  let {streamObj, setStreamObj} = useContext(StreamContext);
  const[ isStop, setIsStop] = useState(true);
  const [currStop, setCurrStop] = useState("-");
  const [ nextStop, setNextStop] = useState("-")
  const [lastStop, setLastStop] = useState("-")
  const [velocity , setVelocity] = useState(0)

  const len =  stops.length;
  useEffect(()=>{
   if(streamObj !== undefined){
       streamObj = JSON.parse(streamObj);
     //  console.log(streamObj)
       setIsStop(streamObj.isstop)
       setCurrStop(streamObj.currentstop)
       setLastStop(streamObj.laststop)
       setNextStop(streamObj.nextstop)
       setVelocity(streamObj.velocity)
       
       //console.log(stops[currStop].name)
     
   }
  }, [streamObj])

    return (
        <div className="info">
            <Card className="route">

                <Card.Body>
                    <div className="route-card">
                    <h4> Bus No </h4>
                    <h4> 2532</h4>
                    </div>
                    <div className="route-stops">
                        <div>
                            <h5>Source :</h5>
                            <h6 className="text-center">{streamObj && "Pipli Bus Stand"}</h6>
                        </div>

                        <div>
                            <h5>Destination :</h5>
                            <h6 className="text-center">{ streamObj && "Pehowa Bus Stand"}</h6>
                        </div>
                    </div>

                </Card.Body>
            </Card>

            <Card className="current-stop">
                <Card.Body>
                  { isStop ?  <div className="route-card">
                    <h5>Current Stop : </h5>
                    <h5 className="text-center">{currStop !=="-" && stops[len - currStop].name}</h5>
                    </div> :
                    <div className="route-card">
                    <h5>Previous Stop : </h5>
                    <h5 className="text-center">{lastStop !== "-" && stops[len-lastStop].name} </h5>
                    </div>
                   }

                </Card.Body>
            </Card>

            <Card className="eta">
                <Card.Body>
                    <div className="route-card">
                    <h5> Next Stop :</h5>
                    <h5 className="text-center"> {nextStop !== "-" && stops[len-nextStop].name} </h5>
                    </div>
                </Card.Body>
            </Card>

            <Card className="velocity">
                <Card.Body>
                    <div className="route-card">
                    <h5> Current Velocity :</h5>
                    <h5 className="text-center"> {velocity + " Km/hr"}</h5>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Info;