import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from './BlockTitle';

function Projects() {
  return (
    <div className={styles.projects}>
     <div className={styles.container}>
       <BlockTitle title={'Мои проекты'} />
       <div className={styles.projectsWrapper}>

       <div className={styles.project}>
          <div className={styles.projectImg}>
            <a className={styles.btnShow} href=''>Смотреть</a>
          </div>
          <span className={styles.projectTitle}>To do list</span> 
          <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.</span>
         </div>

        <div className={styles.project}>
          <div className={styles.projectImg}>
            <a className={styles.btnShow} href=''>Смотреть</a>
          </div>
          <span className={styles.projectTitle}>Socia network</span>
          <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.</span>
        </div>

        <div className={styles.project}>
          <div className={styles.projectImg}>
            <a className={styles.btnShow} href=''>Смотреть</a>
          </div>
          <span className={styles.projectTitle}>Calculator</span>
          <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.</span>
          </div>


       </div>
       </div> 
    </div>
    
    

  );
}

export default Projects;
