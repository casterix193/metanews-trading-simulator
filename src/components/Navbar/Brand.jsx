import { Navbar } from 'react-bootstrap';
import React from 'react';

const NavbarBrand = () => {
  return (
    <Navbar.Brand href="./" className="text-right" style={{ lineHeight: 1 }}>
      <h5
        className="text-white mb-0"
        style={{ lineHeight: 1, fontWeight: 600, letterSpacing: 0.1 }}
      >
        Trading Simulator
      </h5>
      <span className="mr-1" style={{ fontSize: 10, color: '#7E8995' }}>
        Powered by <strong>MetaNews</strong>
      </span>
    </Navbar.Brand>
  );
};

export default NavbarBrand;
