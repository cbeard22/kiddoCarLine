import React from 'react';
import { Link } from 'react-router-dom';

import '../Header/Navbar.css'
import Auth from '../../utils/auth';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  
  return (
    <header className="navbar">
      <Dropdown>
        <Dropdown.Toggle
          id='dropdown-basic'>
          Navigation
        </Dropdown.Toggle>

        <Dropdown.Menu id="menu">
          <Link className="home" to="/">
            Home
          </Link>
          <Link className="parentlogin" to="/ParentLoginForm">
            Parent Login
          </Link>
          <Link className="parentsignup" to="/SignupForm">
            Parent Signup
          </Link>
          <Link className="adminlogin" to="/AdminLoginForm">
            Admin Login
          </Link>
          <Link className="logout" onClick={Auth.logout} to="/">
            Logout
          </Link>
        </Dropdown.Menu>

      </Dropdown>
    </header>
  );
};

export default Header;
