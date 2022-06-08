import React from 'react'
import styles from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

export const CategoryCard = ({categoryId, category, categoryImg,categoryDesc}) => {
    const categoryCardHandler = (categoryId) => {
        sessionStorage.setItem("categoryId", categoryId)
    }
  return (
<div className={`card ${styles.card} normal-shadow`}>
            <div className={styles.cardImg}>
              <img src={categoryImg} alt="" />
            </div>
            <h5 className={styles.cardText}>{categoryDesc}</h5>
            <Link to="rules">
            <button
              className={`btn btn-primary ${styles.btnPlay} normal-shadow`}
              onClick={()=> categoryCardHandler(categoryId)}
            >
              Let's Play
            </button>
            </Link>
          </div>
  )
}
