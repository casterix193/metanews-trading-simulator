import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import NavbarBrand from './Brand';

const NavbarGuest = () => {
  return (
    <Navbar className="z-100 py-2">
      <Container className="d-flex align-items-center justify-space-between">
        <NavbarBrand />
        <Nav.Link href="https://metanews.onrender.com" className="font-weight-bold text-white">MetaNews</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavbarGuest;
