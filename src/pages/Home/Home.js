import React from "react";
import styles from "./Home.module.css";
import HPImg from '../../assets/HarryPotterCategoryImage.jpg';
import GOTImg from '../../assets/GOTCategoryImage.jpg';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="content-container">
      <div className={`main-content ${styles.mainContent}`}>
        <h3>Choose your Quiz</h3>
        <div className={`${styles.cardWrapper}`}>
          <div className={`card ${styles.card} normal-shadow`}>
            <div className={styles.cardImg}>
              <img src={HPImg} alt="" />
            </div>
            <h5 className={styles.cardText}>Get your thinking spells ready!</h5>
            <Link to="rules">
            <button
              className={`btn btn-primary ${styles.btnPlay} normal-shadow`}
            >
              Let's Play
            </button>
            </Link>
          </div>
          <div className={`card ${styles.card} normal-shadow`}>
            <div className={styles.cardImg}>
              <img
                src={GOTImg}
                alt=""
              />
            </div>
            <h5 className={styles.cardText}>You Win or You Die!</h5>
            <Link to='rules'>
            <button
              className={`btn btn-primary ${styles.btnPlay} normal-shadow`}
            >
              Let's Play
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
