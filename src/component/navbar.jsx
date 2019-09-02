import React, { Component } from 'react';

// Stateless Functional Components

const NavBar = ({ totalHitung }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{""}
        <span className="badge badge-pill badge-secondary">
          {totalHitung}
        </span>
      </a>
    </nav>
  );
}
 
export default NavBar; 