import React from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className={`auth-container ${styles.authContainer}`}>
      <div className={`auth-box normal-shadow ${styles.authBox}`}>
        <h2 className={`auth-title ${styles.authTitle}`}>Login</h2>
        <div className={`form ${styles.form}`}>
          <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="Enter email address here"
              id="email"
              name="email"
              //   value={user.email}
              required
              //   onChange={changeHandler}
            />
          </div>
          <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="pass">Password *</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              //   value={user.password}
              required
              //   onChange={changeHandler}
            />
          </div>
          <div className={styles.belowPass}>
            <label for="Remember Me" className={styles.rememberCheck}>
              <input type="checkbox" name="Remember Me" id="" />
              <span className={styles.checkbox}></span>
              Remember Me
            </label>
            <a href="//">Forgot your password &gt;</a>
          </div>
          <button
            className={`btn btn-primary button-submit normal-shadow ${styles.buttonSubmit}`}
            // onClick={guestUserHandler}
          >
            Add Guest Credentials
          </button>
          <button
            className={`btn btn-primary button-submit normal-shadow ${styles.buttonSubmit}`}
            // onClick={loginHandler}
          >
            Login
          </button>
          <Link to="/signup">Create new account &gt;</Link>
        </div>
      </div>
    </main>
  );
};
