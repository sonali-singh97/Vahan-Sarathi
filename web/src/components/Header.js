import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LogIn, User, Minimize, Maximize, Search, Sun , Moon, HelpCircle  } from 'react-feather';
import DataContext from "../context/Data";
import ThemeContext from "../context/darkTheme";
import utf8 from "utf8";

const  Header = () => {

   const {theme, setTheme} = useContext(ThemeContext)
   const [ fullScreen, setFullScreen] = useState(false)
   const {data, setData} = useContext(DataContext);


  const apiData = "{\"vtype\": 0, \"vechn\": 1, \"routen\": 1, \"altitude\": 266, \"lat\": 29.9606722, \"lon\": 76.7828693, \"time\": \"20:45:23\", \"date\": \"13/05/2021\", \"count\": 50, \"countmask\": 38, \"nomask\": 12, \"countmale\": 33, \"countfemale\": 17, \"isstop\": false, \"laststop\": 15, \"currentstop\": null, \"nextstop\": 7, \"tempi\": 36.01, \"humidi\": 46, \"pressurei\": 1000, \"velocity\": 37.0, \"age1\": 15, \"age2\": 14, \"age3\": 19, \"age4\": 2}"



   useEffect (()=> {

    console.log(JSON.parse(apiData));
   
      var sse = new EventSource("http://949976c11c43.ngrok.io/stream",{withCredentials: true})
      console.log(sse);
  
    sse.onmessage =  function(event) {
      //  console.log(decodeURIComponent(escape(event.data)))
      // const str = event.data;
      console.log( event.data)
      // setData(event.data)
      console.log("app2")
    };
   // sse.close()
   console.log(data)

  }, []) 


   

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
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
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
    }

return(
   <div className="header">
   <Row>

   
   <Col>
    <div className="input-div">
    <label> <Search /></label>
    <input type="text" placeholder="Search Buses..."/>
    </div>
  
   </Col>

   <Col>
   <div className="rightbar">
   <span className="mode" >
   <a className="text-dark" href="#" onClick={() => ThemeToggle(theme)} > {theme ? <Sun /> :
      <Moon />}
      </a>
      </span>
      
      <span ><a className="text-dark" href="#" ><HelpCircle  /></a></span>

      <span className="maximize"><a className="text-dark" href="#" onClick={goFull}> {fullScreen ? <Minimize /> : <Maximize />} </a></span>

      <span>
       <Button type="primary" >Logout</Button>
      </span>
      </div>
     
   </Col>
   </Row>
   </div> 
)
}

export default Header;
