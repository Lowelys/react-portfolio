import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from './BlockTitle';
import Skill from './Skill';
import  reactIcon from './img/react-icon.svg';
import  jsIcon from './img/react-icon.svg';
import  htmlIcon from './img/react-icon.svg';

function Skills() {
    let react = reactIcon;
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <BlockTitle title={'Мои скиллы'}/>
        <div className={styles.skillsWrapper}>
          <Skill title={'HTML&CSS'}
                 icon={}
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
  