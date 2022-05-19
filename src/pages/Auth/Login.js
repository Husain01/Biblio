import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const guestUser = {
    email: "test@gmail.com",
    password: "tester",
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const guestUserHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        console.log(res);
        if (res) {
          localStorage.setItem("token", res.user.accessToken);
          localStorage.setItem("user", JSON.stringify(res.user.email));
          authDispatch({
            type: "LOGIN",
            payload: {
              user: res.user.email,
              token: res.user.accessToken,
            },
          });
          navigate(location?.state?.from?.pathname || "/");
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Both of the fields need to be entered");
    }
  };
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
              value={user.email}
              required
              onChange={changeHandler}
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
              required
              onChange={changeHandler}
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
            onClick={guestUserHandler}
          >
            Add Guest Credentials
          </button>
          <button
            className={`btn btn-primary button-submit normal-shadow ${styles.buttonSubmit}`}
            onClick={loginHandler}
          >
            Login
          </button>
          <Link to="/signup">Create new account &gt;</Link>
        </div>
      </div>
    </main>
  );
};
