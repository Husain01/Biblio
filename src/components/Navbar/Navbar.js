import React from "react";
import logo from '../../assets/logo.png';
import logo_txt from '../../assets/logo-txt.png';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header class="navbar">
      <div class="logo">
        <img src={logo} alt="" />
        <img src={logo_txt} alt="" />
      </div>
      <div class="search">
        <i class="fas fa-search"></i>
        <input type="text" class="search-input" placeholder="Search" />
      </div>
      <div class="nav-links">
        <button class="btn btn-primary btn-login normal-shadow">Login</button>
      </div>
    </header>
  );
};
