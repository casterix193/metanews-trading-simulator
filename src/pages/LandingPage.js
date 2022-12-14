// imports
import React from 'react';
import { Container, Row, Col, Image, Button, Navbar } from 'react-bootstrap';
import { AuthService } from '../services';
import { Wave, Portfolio, Logo } from '../img';
import NavbarGuest from '../components/Navbar/NavbarGuest';

// component LandingPage
export default class LandingPage extends React.Component {
  /**
   * constructor of LandingPage
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }

  /**
   * render-function of LandingPage
   */
  render() {
    const { currentUser } = this.state;

    if (currentUser != null) {
      this.props.history.push('/dashboard');
      window.location.reload();
    }

    return (
      <Container fluid>
        <Image src={Wave} className="position-fixed h-100"></Image>

        <NavbarGuest />

        <Row className="main-content">
          <Col className="d-flex" style={{ pointerEvents: 'none' }}>
            <Image
              src={Portfolio}
              className="mx-auto my-auto h-60"
              fluid
            ></Image>
          </Col>
          <Col className="d-flex">
            <div className="mx-auto my-auto">
              <h2 className="font-weight-bold">Build Your Portfolio</h2>
              <h5 style={{ color: '#7E8995' }}>
                Papertrading with cryptocurrencies
              </h5>
              <Button
                variant="primary rounded-2"
                className="mt-3"
                href="./login"
              >
                Start my Adventure
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
