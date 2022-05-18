import React from "react";
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import logo_txt from '../../assets/logo-txt.png';
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header class={`navbar ${styles.navbar}`}>
        <Link to="/">
      <div class={`logo ${styles.logo}`}>
        <img src={logo} alt="" className={styles.logoImg}/>
        <img src={logo_txt} alt="" className={styles.logoImg}/>
      </div>
        </Link>
      <div class="search">
        <i class="fas fa-search"></i>
        <input type="text" class="search-input" placeholder="Search" />
      </div>
      <div class="nav-links">
          <Link to='/login'>
        <button class="btn btn-primary btn-login normal-shadow">Login</button>
          </Link>
      </div>
    </header>
  );
};
