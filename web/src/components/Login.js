import React, { useState, useEffect, useContext } from 'react';
import './../assets/scss/components/login.scss';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import {
  Minimize,
  Maximize,
  Search,
  Sun,
  Moon,
  HelpCircle,
} from 'react-feather';
import GoogleButton from 'react-google-button';

function Login() {
  const [theme, setTheme] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const ThemeToggle = (light) => {
    if (light) {
      setTheme(!light);
      document.body.className = 'light';
      localStorage.setItem('layout_version', 'light');
    } else {
      setTheme(!light);
      document.body.className = 'dark';
      localStorage.setItem('layout_version', 'dark');
    }
  };

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

  const SignInButtonHnadler = () => {
    
  };

  return (
    <div>
      <div className="login_header">
        <Row>
          <Col>
            <h4>Login</h4>
          </Col>
          <Col>
            <div className="rightdiv">
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
            </div>
          </Col>
        </Row>
      </div>
      <Row style={{ marginTop: '12rem' }}>
        <Container>
          <h1
            class="text-center"
            style={{ fontSize: '60px', fontWeight: '600' }}
          >
            <span className="welcome_text">Welcome to </span>Vahan Sarathi
          </h1>
          <h6 className="subtext">Please login to continue</h6>
        </Container>
      </Row>
      <Row>
        <div
          style={{
            marginTop: '1.5rem',
            width: '100%',
            height: '200px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
            }}
          >
            <GoogleButton onClick={SignInButtonHnadler} />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Login;
