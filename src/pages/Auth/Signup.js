import React from 'react';
import styles from "./Auth.module.css";
import {Link} from 'react-router-dom';

export const Signup = () => {
  return (
    <main className={`auth-container ${styles.authContainer}`}>
      <div className={`auth-box normal-shadow ${styles.authBox}`}>
        <h2 className={`auth-title ${styles.authTitle}`}>Sign Up</h2>
        <div className={`form ${styles.form}`}>
          <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="Enter email address here"
              id="email"
              name="email"
            //   value={user.email}
            //   onChange={changeHandler}
              required
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
            //   onChange={changeHandler}
              required
            />
          </div>
          <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="pass">Confirm Password *</label>
            <input
              type="password"
              placeholder="Re-enter Password"
              id="confirm-password"
              name="confirmPassword"
            //   value={user.confirmPassword}
            //   onChange={changeHandler}
              required
            />
          </div>
          <div className={styles.belowPass}>
            <label for="Remember Me" className={styles.rememberCheck}>
              <input type="checkbox" name="Remember Me" id="" />
              <span className={styles.checkbox}></span>I accept all Terms & Conditions
            </label>
          </div>
          <button
className={`btn btn-primary button-submit normal-shadow ${styles.buttonSubmit}`}            // onClick={signUpHandler}
          >
            Sign Up
          </button>
          <Link to="/login">Already have an account &gt;</Link>
        </div>
      </div>
    </main>
  )
}
