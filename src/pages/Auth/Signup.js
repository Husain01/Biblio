import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../context/Auth/AuthContext";
import { auth } from "../../firebase";

export const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkPasswordHandler = (e) => {
    if (user.password !== user.confirmPassword) {
      alert("Your passwords do not match");
    } else {
      return true;
    }
  };
  const checkInputFields = () => {
    return (
      user.email !== "" && user.password !== "" && user.confirmPassword !== ""
    );
  };

  const signUpHandler = async (e) => {
    if (checkInputFields()) {
      if (checkPasswordHandler()) {
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password
          );
          console.log(res);
          if (res) {
             localStorage.setItem("token", res.user.accessToken);
             localStorage.setItem(
              "user",
              JSON.stringify(res.user.email)
            );
            authDispatch({ type: "SIGNUP", payload: { user:res.user.email, token:res.user.accessToken } });
            navigate(location?.state?.from?.pathname || "/");
          } else {
            throw new Error("Error");
          }
        } catch (error) {
          alert(error);
        }
      }
    } else {
      alert("All the fields need to be entered!");
    }
  };

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
              value={user.email}
              onChange={changeHandler}
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
              value={user.password}
              onChange={changeHandler}
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
              value={user.confirmPassword}
              onChange={changeHandler}
              required
            />
          </div>
          <div className={styles.belowPass}>
            <label for="Remember Me" className={styles.rememberCheck}>
              <input type="checkbox" name="Remember Me" id="" />
              <span className={styles.checkbox}></span>I accept all Terms &
              Conditions
            </label>
          </div>
          <button
            className={`btn btn-primary button-submit normal-shadow ${styles.buttonSubmit}`} // onClick={signUpHandler}
            onClick={signUpHandler}
          >
            Sign Up
          </button>
          <Link to="/login">Already have an account &gt;</Link>
        </div>
      </div>
    </main>
  );
};
