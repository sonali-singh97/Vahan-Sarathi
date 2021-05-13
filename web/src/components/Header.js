import React, { useState } from "react";
import { Row, Col,InputGroup, FormControl } from "react-bootstrap";
import { LogIn, User, Minimize, Maximize, Search, Sun , Moon, HelpCircle  } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const  Header = () => {

   const [theme, setTheme] = useState(false)
   const [ fullScreen, setFullScreen] = useState(false)


     /*** Theme toggle ******/
   const ThemeToggle = (light) => {
      if (light) {
        setTheme(!light)
        document.body.className = "light"
        localStorage.setItem('layout_version', 'light');
      } else {
        setTheme(!light)
        document.body.className = "dark"
        localStorage.setItem('layout_version', 'dark');
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
   <h4>Dashboard</h4>
   </Col>
   
   <Col>
    <div className="input-div">
    <label> <Search /></label>
    <input type="text" placeholder="Search Buses..."/>
    </div>
  
   </Col>

   <Col>
   <div className="rightbar">
   <span className="mode" onClick={() => ThemeToggle(theme)}>
      {theme ? <Sun /> :
      <Moon />}
      </span>
       
      <span ><HelpCircle  /></span>

      <span className="maximize"><a className="text-dark" href="#javascript" onClick={goFull}> {fullScreen ? <Minimize /> : <Maximize />} </a></span>

      <span>
         Login / Signup
      </span>
      </div>
   </Col>
   </Row>
   </div> 
)
}

export default Header;