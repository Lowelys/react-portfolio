import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from './BlockTitle';
import Skill from './Skill';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <BlockTitle title={'Мои скиллы'}/>
        <div className={styles.skillsWrapper}>
          <Skill title={'HTML&CSS'}
                 description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.'}/>
          <Skill title={'JS'}
                 description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.'}/>
          <Skill title={'React'}
                 description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.'}/>
           </div>
     
     
  </div>
      </div>
      );
    }
    
    export default Skills;
  