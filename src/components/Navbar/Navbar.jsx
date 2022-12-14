import { Button, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import React from 'react';
import NavbarBrand from './Brand';

const Navbar = ({ balance, onLogout }) => {
  return (
    <BSNavbar className="z-100" id="navbar">
      <NavbarBrand />
      <Nav className="mr-auto w-100 ml-4">
        <Nav.Link href="/dashboard" className="mx-3 text-white">
          Dashboard
        </Nav.Link>
        <Nav.Link
          href="https://metanews.onrender.com"
          className="mx-3 font-weight-bold"
          style={{ color: '#454B52' }}
        >
          MetaNews
        </Nav.Link>
      </Nav>
      <BSNavbar.Text className="w-20 text-light mr-2">
        Your Balance:
      </BSNavbar.Text>
      <BSNavbar.Text className="text-light mr-4 ml-n4">
        ${balance ? Number(balance).toLocaleString() : null}
      </BSNavbar.Text>
      <Button
        className="w-15 bg-dark"
        style={{ border: 'none' }}
        onClick={onLogout}
      >
        Logout
      </Button>
    </BSNavbar>
  );
};

export default Navbar;
