import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Auth from '../utils/auth';

const AppNavbar = () => {

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
          </Navbar.Brand>
          <Navbar.Collapse id='navbar'>

            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/ParentLoginForm'>
                Parent Login
              </Nav.Link>
            </Nav>

            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/SignupForm'>
                Parent Sign Up
              </Nav.Link>
            </Nav>

            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/AdminLoginForm'>
                Admin Login
              </Nav.Link>
            </Nav>

            <Nav className='ml-auto'>
              <Nav.Link onClick={Auth.logout}>
              Logout
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default AppNavbar;
