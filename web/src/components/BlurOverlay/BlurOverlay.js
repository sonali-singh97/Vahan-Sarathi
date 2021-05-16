import React from 'react';
import './../../assets/scss/components/bluroverlay.scss';
import { Row, Container,Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import buslogo from './../../assets/icons/bus.svg';

function BlurOverlay() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="main">
      <Row style={{ marginTop: '12rem' }}>
        <Container
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
            width: '30%',
            padding: '2rem',
            height: '200px',
            borderRadius: '22px',
            backgroundColor: '#F7F9FA',
          }}
        >
          <h6 className="subtext">Please login to continue</h6>
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
              <Button
                style={{ width: '150px' }}
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            </div>
          </div>
        </Container>
      </Row>
    </div>
  );
}

export default BlurOverlay;
