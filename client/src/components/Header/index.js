import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="navbar">
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
    </header>
  );
};

export default Header;
