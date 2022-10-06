import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.png';
import logo_txt from '../../assets/logo-txt.png';
import styles from "./Navbar.module.css";
import { useAuth } from "../../context/Auth/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const Navbar = () => {
    const navigate = useNavigate();
    const {authState, authDispatch} = useAuth();
    const logoutHandler = () => {
        navigate("/");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        signOut(auth);
        authDispatch({
            type: "LOGOUT"
        })
    }
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
      <div class={`nav-links ${styles.navLinks}`}>
          {authState.token ? (<button
            className="btn btn-primary btn-login normal-shadow"
            onClick={logoutHandler}
          >
            Logout
          </button>) : (<Link to='/login'>
              <button class="btn btn-primary btn-login normal-shadow">Login</button>
                </Link>)
          }
          
      </div>
    </header>
  );
};
