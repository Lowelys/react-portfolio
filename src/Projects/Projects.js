import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from '../Skills/BlockTitle/BlockTitle';
import Project from "./Project/Project";
import todolistBgImg from '../assets/img/todolist.jpg';
import socialnetworkBgImg from '../assets/img/social-network.jpg';
import calculatorBgImg from '../assets/img/calculator.jpg';
import Fade from 'react-reveal/Fade';

function Projects() {
    const todolistImg = {
        backgroundImage: 'url(' + todolistBgImg + ')',
    };
    const socialnetworkImg = {
        backgroundImage: 'url(' + socialnetworkBgImg + ')',
    };
    const calculatorImg = {
        backgroundImage: 'url(' + calculatorBgImg + ')',
    };

    return (
    <div className={styles.projects}>
            <Fade bottom>
     <div className={styles.container}>
       <BlockTitle title={'Мои проекты'} />
       <div className={styles.projectsWrapper}>
           <Project title={'To do list'}
                        style={todolistImg}
                        description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis'}/>
           <Project title={'Social network'}
                    style={socialnetworkImg}
                    description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis'}/>
           <Project title={'Calculator'}
                    style={calculatorImg}
                    description={'Lorem ipsum dolor sit amet, consectetur ipsum dolor nesciunt soluta adipisicing elit. Quia, veritatis'}/>


             </div>
           </div>
         </Fade>
    </div>
    
    

  );
}

export default Projects;
