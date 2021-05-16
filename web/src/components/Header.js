import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LogIn, User, Minimize, Maximize, Search, Sun , Moon, HelpCircle  } from 'react-feather';
import DataContext from "../context/Data";
import ThemeContext from "../context/darkTheme";
import StreamContext from "../context/Stream";
import utf8 from "utf8";
import { useAuth0 } from '@auth0/auth0-react';


const Header = () => {
  const [theme, setTheme] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
 let { res, setRes } = useContext(DataContext);
  let {streamObj, setStreamObj} = useContext(StreamContext);



//http://949976c11c43.ngrok.io/stream

//pravega-test.centralindia.cloudapp.azure.com:8000/stream


//http://localhost:8000/stream

// useEffect(()=> {


//   if(res!== undefined)
//    console.log(res)

// },[])

//let res ={}




const fetchData =  (e) => {
  //console.log(JSON.parse(apiData));
  console.log("inside function", e)

//  if(e.target === "svg" || e.key === 'Enter'){
 
  var sse = new EventSource("http://localhost:8000/stream",{withCredentials: true})
  console.log(sse);   
  sse.onmessage =  function(event) {
 // console.log(event.data)
 const newPoint = JSON.parse(JSON.parse(event.data))

   setStreamObj(JSON.parse(event.data))
   setRes([...res, [newPoint.lon, newPoint.lat]])
  
 
};

}


     /*** Theme toggle ******/
   const ThemeToggle = (light) => {
      if (light) {
        setTheme(!light)
        document.body.className = "light"
      } else {
        setTheme(!light)
        document.body.className = "dark"
      }
    }
  

  /***Full screen toggle ******/
  const goFull = () => {
    if (!fullScreen) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
      setFullScreen(true);
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      setFullScreen(false);
    }
  };
  const { logout } = useAuth0();

return(
   <div className="header sidebar-open">
   <Row>
        <Col>
          <div className="input-div">
            <label>
              {' '}
              <Search  />
            </label>
            <input type="text" placeholder="Search Buses..." onKeyPress={(e) => {
            fetchData(e)
           }
              } />
          </div>
        </Col>

        <Col>
          <div className="rightbar">
            <span className="mode">
              <a
                className="text-dark"
                href="#"
                onClick={() => ThemeToggle(theme)}
              >
                {theme ? <Sun /> : <Moon />}
              </a>
            </span>

            <span>
              <a className="text-dark" href="#">
                <HelpCircle />
              </a>
            </span>

            <span className="maximize">
              <a className="text-dark" href="#" onClick={goFull}>
                {fullScreen ? <Minimize /> : <Maximize />}{' '}
              </a>
            </span>

            {/* <span>
              {isAuthenticated ? (
                <Button
                  type="primary"
                  onClick={() => {
                    props.logoutsource == 'dashboard'
                      ? logout({ returnTo: 'http://localhost:3000/' })
                      : logout({
                          returnTo: 'http://localhost:3000/historic_data',
                        });
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={() =>{props.loginsource == 'dashboard'
                    ? loginWithRedirect({
                        redirectUri: 'http://localhost:3000/',
                      })
                    : loginWithRedirect({
                        redirectUri: 'http://localhost:3000/historic_data',
                      });}
                    
                  }
                >
                  Login
                </Button>
              )}
            </span> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
