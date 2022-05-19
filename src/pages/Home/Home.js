import React from 'react';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className="content-container">
        <div className={`main-content ${styles.mainContent}`}>
        <div className={`${styles.cardWrapper}`}>
        <div className="card">
            <div className="card-img">
                <img src="" alt="" />
            </div>
        </div>
        <div className="card">Two</div>
        </div>
        </div>
    </div>
  )
}
