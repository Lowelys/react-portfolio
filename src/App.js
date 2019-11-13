import React from 'react';
import './App.css';
import Header from './Header';
import Main  from './Main';
import Skills from './Skills';
import Skill from './Skill';
import Projects from './Projects';
import Slogan from './Slogan';
import Contacts from './Contacts';
import Footer from './Footer';
import BlockTitle from './BlockTitle';
import NavMenu from './NavMenu';



function App() {
  return (
    <div className="App">
      <div className='portfolio'>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Slogan />
        <Contacts />
        <Skill />>
        <BlockTitle />
        <NavMenu />
        <Footer />

      </div>


    </div>
  );
}

export default App;
