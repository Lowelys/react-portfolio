import React from 'react';
import styles from './Skill.module.css';


function Skill(props) {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}>
      <img src={props.icon} alt='' />
      </div>
      <span className={styles.skillTitle}>{props.title}</span>
      <span className={styles.description}>{props.description}</span>

    </div>

  );
}


export default Skill;
