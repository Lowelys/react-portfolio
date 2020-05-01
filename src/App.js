import React from 'react';
import {animateScroll as scroll} from "react-scroll";
import style from './App.module.scss';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import toTopIcon from './assets/img/to-top.png';
import Particles from 'react-particles-js';

const App = () => {
    return (
          <div className={style.app}>
              <Particles/>
            <div className={style.container} >
                <Header/>
                <Info/>
                <Experience/>
                <Skills/>
                <Projects/>
                <Footer/>
              </div>
            <img onClick={() => scroll.scrollToTop()}
                 className={style.top} src={toTopIcon} alt={'back to top'}>
            </img>
              <Particles/>
        </div>

    );
}

export default App;