import React from "react";
import styles from "./Home.module.css";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { quizQues } from "../../backend/DB/quizInfo";

export const Home = () => {
  return (
    <div className={`content-container ${styles.contentContainer}`}>
      <div className={`main-content ${styles.mainContent}`}>
        <h3>Choose your Quiz</h3>
        <div className={`${styles.cardWrapper}`}>
          {quizQues.map(({categoryId, category, categoryImg,categoryDesc}) => {
            return (
              <CategoryCard 
              key={categoryId}
              categoryId={categoryId}
              category={category}
              categoryImg={categoryImg}
              categoryDesc={categoryDesc}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};
