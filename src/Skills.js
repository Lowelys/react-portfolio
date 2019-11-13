import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from './BlockTitle';
import Skill from './Skill';
import reactIcon from './assets/img/react-icon.svg';
import jsIcon from './assets/img/js-icon.svg';
import htmlIcon from './assets/img/html-icon.svg';
import Fade from 'react-reveal/Fade';


function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
  return (
    <div className={styles.skills}>
        <Fade bottom>
      <div className={styles.container}>
        <BlockTitle title={'Мои скиллы'}/>
        <div className={styles.skillsWrapper}>
          <Skill title={'HTML&CSS'}
                 icon={react}
                 description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.'}/>
          <Skill title={'JS'}
                 icon={js}
                 description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.'}/>
          <Skill title={'React'}
                 icon={html}
                 description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis.'}/>
            </div>
     
     
          </div>
        </Fade>
      </div>
      );
    }
    
    export default Skills;
  