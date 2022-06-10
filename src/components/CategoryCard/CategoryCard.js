import React from 'react'
import styles from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

export const CategoryCard = ({categoryId, category, categoryImg,categoryDesc}) => {
    const categoryCardHandler = (categoryId, category) => {
        sessionStorage.setItem("categoryId", categoryId)
        sessionStorage.setItem("category", category)
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
              onClick={()=> categoryCardHandler(categoryId, category)}
            >
              Let's Play
            </button>
            </Link>
          </div>
  )
}
